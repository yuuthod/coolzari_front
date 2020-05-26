<template>
  <div class="content">
    <ul>
      <li v-for="(obj, key) in reviewArr" :key="key">
        <img
          :src="`${require('../assets/images/poster/' + obj.img)}`"
          alt="movie poster"
        />
        <div ref="inner_content">
          <grade :gradeNum="obj.grade"></grade>
          <dl>
            <dt>{{ obj.userHeight }}</dt>
            <dd>키(cm)</dd>
            <dt>{{ obj.userRegion }}</dt>
            <dd>주시야</dd>
            <dt>{{ obj.userPreferseatA }}/{{ obj.userPreferseatB }}</dt>
            <dd>좌석</dd>
          </dl>
          <p>
            {{ obj.comment }}
          </p>
          <dl>
            <dt>만족도1</dt>
            <dd><progress value="20" max="100"></progress></dd>
            <dt>만족도2</dt>
            <dd><progress value="20" max="100"></progress></dd>
            <dt>만족도3</dt>
            <dd><progress value="20" max="100"></progress></dd>
          </dl>
          <ul>
            <li>{{ obj.userId }}</li>
            <li>{{ obj.date }}</li>
            <li v-if="isDeleteBtn && selectedIndex === key">삭제</li>
          </ul>
          <button @click="detailShowClick(key)">
            {{ isDeleteBtn && selectedIndex === key ? '접기' : '펼치기' }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script scoped>
import Grade from '../components/commons/Grade.vue';
export default {
  data() {
    return {
      reviewArr: [
        {
          userId: 'user01',
          grade: 5,
          img: 'darkfate.jpg',
          movie: 'darkfate',
          userHeight: 160,
          userRegion: '오른쪽',
          userPreferseatA: '좌',
          userPreferseatB: '상',
          comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ad voluptate distinctio voluptas. Molestiae doloribus esse nobis facilis. Quis repellendus provident commodi, aut quo saepe quae odit suscipit accusamus, ducimus et. Harum voluptate sequi rerum quibusdam facere, placeat impedit ducimus dolorem quo laboriosam nihil possimus qui assumenda quam iusto exercitationem rem ab molestiae deserunt illum. Non temporibus est, aliquam nemo error corporis hic dolorum ab possimus, illum voluptate tempore nihil quis quibusdam veniam cumque! Ducimus ipsa iure ullam consectetur fugit aperiam illo sunt sequi consequatur dicta fuga incidunt, rem quod nostrum animi suscipit illum dolores minus molestias non velit dolorum!',
          date: '2020.04.25',
        },
        {
          userId: 'user01',
          grade: 4,
          img: 'aladin.jpg',
          movie: 'aladin',
          userHeight: 160,
          userRegion: '왼쪽',
          userPreferseatA: '좌',
          userPreferseatB: '중상',
          comment:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam est quibusdam voluptatem. Natus, assumenda debitis perspiciatis vero nostrum voluptatum accusantium.',
          date: '2020.04.25',
        },
        {
          userId: 'user01',
          grade: 3,
          img: 'frozen2.jpg',
          movie: 'frozen2',
          userHeight: 160,
          userRegion: '왼쪽',
          userPreferseatA: '우',
          userPreferseatB: '하',
          comment:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sapiente deleniti expedita iure assumenda, nam dolorem sunt provident quo unde, officiis et, magni ex fuga voluptas velit ipsum dicta quia.',
          date: '2020.04.25',
        },
        {
          userId: 'user01',
          grade: 3,
          img: 'aladin.jpg',
          movie: 'aladin',
          userHeight: 160,
          userRegion: '오른쪽',
          userPreferseatA: '좌',
          userPreferseatB: '중상',
          comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam at cum, corrupti molestias iusto excepturi pariatur odit necessitatibus repudiandae similique perspiciatis ullam sapiente, nulla quibusdam non nisi quis eveniet aliquam sequi! Cumque, quidem voluptatem? Enim at esse eius commodi ea quisquam fuga vitae, ipsa neque ad laboriosam saepe, atque deserunt quia quo consequuntur quos non quidem totam laudantium repellat sint reiciendis ipsum numquam! Sed quaerat modi mollitia minima quisquam. Tenetur?',
          date: '2020.04.25',
        },
      ],
      isDeleteBtn: false,
      selectedIndex: 0,
      beforIndex: 0,
    };
  },
  components: {
    Grade,
  },
  methods: {
    detailShowClick(key) {
      this.selectedIndex = key;
      const _div = this.$refs.inner_content[key];
      let _height = _div.clientHeight;
      if (_height <= 65) {
        this.slideDown(key);
        this.isDeleteBtn = true;
        if (this.$refs.inner_content[this.beforIndex].clientHeight > 65) {
          this.slideUp(this.beforIndex);
        }
        this.beforIndex = key;
      } else if (_height > 65) {
        this.isDeleteBtn = false;
        this.slideUp(key);
      }
    },
    slideUp(key) {
      const _div = this.$refs.inner_content[key];
      let _height = _div.clientHeight;
      let interveal = setInterval(() => {
        _div.style.height = `${(_height -= 5)}px`;
        if (_height === 65) {
          clearInterval(interveal);
        }
      }, 5);
    },
    slideDown(key) {
      const _div = this.$refs.inner_content[key];
      let _height = _div.clientHeight;
      let interveal = setInterval(() => {
        _div.style.height = `${(_height += 5)}px`;
        if (_height === _div.scrollHeight + (_div.scrollHeight % 5)) {
          clearInterval(interveal);
        }
      }, 5);
    },
  },
};
</script>

<style scoped>
div.content {
  background: #eee;
  padding-bottom: 15px;
}
div.content * {
  font-size: 0.8rem;
}
div.content > ul > li {
  position: relative;
  display: flex;
  padding: 20px 15px 0 15px;
}
div.content > ul > li:not(:first-of-type) {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #bdbdbd;
}
div.content > ul > li > img {
  width: 30%;
  height: 100%;
}
div.content > ul > li > div {
  margin-left: 10px;
  overflow: hidden;
  height: 65px;
}
div.content > ul > li > div > dl:nth-of-type(1) dt,
div.content > ul > li > div > dl:nth-of-type(1) dd {
  display: inline-block;
  color: #272727;
}
div.content > ul > li > div > dl:nth-of-type(1) dt:not(:first-of-type)::before {
  content: '';
  display: inline-block;
  width: 5px;
  height: 8px;
  margin-right: 5px;
  border-right: 1px solid #aaa;
}
div.content > ul > li > div > dl:nth-of-type(1) dd {
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 5px 10px;
  opacity: 0.5;
  position: absolute;
  z-index: 1;
}
div.content > ul > li > div > dl:nth-of-type(1) dt:hover + dd {
  visibility: visible;
}
div.content > ul > li > div > ul > li {
  display: inline-block;
  color: #aaa;
}
div.content > ul > li > div ul li:not(:last-child)::after {
  content: '';
  display: inline-block;
  width: 5px;
  height: 10px;
  margin-right: 5px;
  border-right: 1px solid #aaa;
}
div.content > ul > li > div > ul {
  position: absolute;
  bottom: 0;
}
div.content > ul > li > div > button {
  position: absolute;
  bottom: 0;
  right: 10px;
}
div.content > ul > li > div p {
  width: 200px;
  padding-top: 15px;
}
div.content > ul > li > div p.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 3.6em;
}
div.content > ul > li > div dl:nth-of-type(2) {
  margin: 5px 0 30px 0;
}
div.content > ul > li > div dl:nth-of-type(2) > dt {
  padding-top: 10px;
}
</style>
