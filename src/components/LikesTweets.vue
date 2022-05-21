<template>
  <div class="AllTweets">
    <div class="singleTweet" v-for="tweet in currentTweets" :key="tweet.id">
      <img class="singleTweetUserImage" :src="tweet.tweetAvatar" alt="" />
      <div class="singleTweetContent">
        <div class="singleTweetUserNameGroup">
          <router-link class="singleTweetUserName" to="">{{
            tweet.tweetName
          }}</router-link>
          <router-link class="singleTweetUserAccount" to=""
            >@{{ tweet.tweetAccount }}</router-link
          >
          <p class="singleTweetCreatedAt">・{{ tweet.createdAt }}</p>
        </div>
        <p class="singleTweetText">
          <router-link :to="{ name: 'tweet', params: { id: tweet.UserId } }">{{
            tweet.tweetDescription
          }}</router-link>
        </p>
        <div class="singleTweetBtnGroup">
          <button
            class="singleTweetBtn"
            @click.stop.prevent="openReplyTweetModal"
          >
            <img src="../assets/comment-icon.png" alt="" />
            <p>{{ tweet.tweetRepliesCount }}</p>
          </button>

          <button class="singleTweetBtn">
            <img src="../assets/like-icon-active.png" alt="" />
            <img src="../assets/like-icon.png" alt="" />
            <p>
              {{ tweet.tweetLikesCount }}
            </p>
          </button>
        </div>
      </div>
    </div>
    <!-- replyModal -->
    <div id="replyTweetModal" v-show="replyTweetModalIsOpen">
      <div id="replyTweetModalWrapper">
        <div class="replyTweetModalConnectLine"></div>
        <button
          class="closeReplyTweetModalBtn"
          @click.stop.prevent="closeReplyTweetModal"
        >
          ✖
        </button>
        <div class="replyTweetModalContent">
          <div class="replyTweet">
            <img
              class="replyTweetUserImage"
              src="https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg"
              alt=""
            />
            <div class="replyTweetContent">
              <div class="replyTweetUserNameGroup">
                <router-link class="replyTweetUserName" to=""
                  >awwfuq</router-link
                >
                <router-link class="replyTweetUserAccount" to=""
                  >@awwfuq</router-link
                >
                <p class="replyTweetCreatedAt">・2022/5/11</p>
              </div>
              <p class="replyTweetText">helloooo</p>
              <p class="replyTweetFor">回覆給 <span>@awwfuq</span></p>
            </div>
          </div>
          <div class="currentUserReply">
            <img
              src="https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg"
              width="50px"
              height="50px"
              class="currentUserReplyUserImg"
              alt=""
            />
            <textarea
              v-model="replyText"
              class="currentUserReplyText"
              placeholder="推你的回覆"
            >
            </textarea>
          </div>
          <button
            @click.stop.prevent="replyTweetModalSubmit"
            class="replyTweetModalSubmitBtn"
          >
            回覆
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentTweets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      replyTweetModalIsOpen: false,
      replyText: "",
    };
  },
  methods: {
    openReplyTweetModal() {
      this.replyTweetModalIsOpen = true;
    },
    closeReplyTweetModal() {
      this.replyTweetModalIsOpen = false;
    },
    replyTweetModalSubmit() {
      this.replyText = "";
      this.replyTweetModalIsOpen = false;
    },
  },
};
</script>

<style scoped>
.AllTweets {
  width: 100%;
}
.singleTweet {
  border-bottom: 1px solid #e6ecf0;
  height: 168px;
  display: flex;
  padding: 16px 24px;
  position: relative;
}

.singleTweetUserImage {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.singleTweetContent {
  width: 510px;
}

.singleTweetUserNameGroup {
  height: 26px;
  line-height: 26px;
  display: flex;
}

.singleTweetUserName {
  font-size: 16px;
  font-weight: 700;
  color: #171725;
  margin-right: 8px;
  text-decoration: none;
}

.singleTweetUserAccount {
  font-size: 14px;
  font-weight: 400;
  color: #6c757d;
  text-decoration: none;
}

.singleTweetCreatedAt {
  font-size: 14px;
  font-weight: 400;
  color: #6c757d;
}

.singleTweetText {
  width: 100%;
  height: 78px;
  margin-top: 8px;
}

.singleTweetText a {
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  color: #171725;
  line-height: 26px;
}

.singleTweetBtnGroup {
  height: 16px;
  display: flex;
  margin-top: 14px;
  left: 82px;
  bottom: 16px;
}

.singleTweetBtn {
  padding: 0;
  width: 40px;
  border: 0;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  font-size: 13px;
  font-weight: 500;
  color: #657786;
}

.singleTweetBtn .active {
  color: #e0245e;
}
.singleTweetBtn:hover {
  cursor: pointer;
}

#replyTweetModal {
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
}

#replyTweetModalWrapper {
  width: 634px;
  height: 500px;
  background-color: #fff;
  margin-top: 56px;
  border-radius: 14px;
  position: relative;
}

.closeReplyTweetModalBtn {
  height: 24px;
  width: 24px;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff6600;
  border: 0;
  background-color: #fff;
}

.closeReplyTweetModalBtn:hover {
  cursor: pointer;
}

.replyTweetModalContent {
  border-top: 1px solid #e6ecf0;
  height: 443px;
}

.currentUserReply {
  display: flex;
  padding-left: 24px;
  margin-top: 45px;
}

.currentUserReplyUserImg {
  border-radius: 50%;
  margin-right: 8px;
}

.currentUserReplyText {
  margin-top: 12px;
  width: 510px;
  height: 100px;
  resize: none;
  font-size: 16px;
  font-weight: 400;
  border: 0;
}

.currentUserReplyText::placeholder {
  color: #6c757d;
}

.currentUserReplyText:focus {
  outline: none;
}

.replyTweetModalSubmitBtn {
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 64px;
  height: 40px;
  border-radius: 50px;
  border: 0;
  background-color: #ff6600;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}

.replyTweet {
  display: flex;
  height: 129px;
  margin-top: 16px;
  padding-left: 24px;
  position: relative;
}

.replyTweetUserImage {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 8px;
}

.replyTweetUserNameGroup {
  display: flex;
  height: 26px;
  line-height: 26px;
}

.replyTweetUserName {
  font-size: 16px;
  font-weight: 700;
  color: #171725;
  margin-right: 8px;
  text-decoration: none;
}

.replyTweetUserAccount {
  font-size: 14px;
  font-weight: 400;
  color: #6c757d;
  text-decoration: none;
}

.replyTweetCreatedAt {
  font-size: 14px;
  font-weight: 400;
  color: #6c757d;
}

.replyTweetText {
  width: 528px;
  height: 78px;
  margin-top: 8px;
}

.replyTweetFor {
  position: absolute;
  top: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #6c757d;
}

.replyTweetFor span {
  color: #ff6600;
}

.replyTweetModalConnectLine {
  width: 2px;
  height: 86px;
  background-color: #b5b5be;
  position: absolute;
  left: 48px;
  top: 139px;
}
</style>