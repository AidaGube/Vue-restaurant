<template>
  <div v-if="showPopup" ref="infoRef" @click="handleClickPopup" class="info">
    <div class="info__label">
      <svg
        class="info__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11.5788"
          cy="7.27803"
          r="4.77803"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.00002 18.7014C3.99873 18.3655 4.07385 18.0337 4.2197 17.7311C4.67736 16.8158 5.96798 16.3307 7.03892 16.111C7.81128 15.9462 8.59431 15.836 9.38217 15.7815C10.8408 15.6533 12.3079 15.6533 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1099 16.111C17.1808 16.3307 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0812 16.1099 21.2918C15.3384 21.4634 14.5551 21.5766 13.7666 21.6304C12.5794 21.7311 11.3866 21.7494 10.1968 21.6854C9.92221 21.6854 9.65677 21.6854 9.38217 21.6304C8.59663 21.5773 7.81632 21.4641 7.04807 21.2918C5.96798 21.0812 4.68652 20.6419 4.2197 19.6808C4.0746 19.3747 3.99955 19.0401 4.00002 18.7014Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <b>{{userName}}</b>
    </div>
    <div v-if="userIsTrue" class="info__popup">
      <ul>
        <li>{{userEmail}}</li>
        <li @click="handleClickLogout">Выйти</li>
      </ul>
    </div>
  </div>

  <div v-else @click="() => TogglePopup('buttonModal')" class="info__login">
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11.5788"
          cy="7.27803"
          r="4.77803"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.00002 18.7014C3.99873 18.3655 4.07385 18.0337 4.2197 17.7311C4.67736 16.8158 5.96798 16.3307 7.03892 16.111C7.81128 15.9462 8.59431 15.836 9.38217 15.7815C10.8408 15.6533 12.3079 15.6533 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1099 16.111C17.1808 16.3307 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0812 16.1099 21.2918C15.3384 21.4634 14.5551 21.5766 13.7666 21.6304C12.5794 21.7311 11.3866 21.7494 10.1968 21.6854C9.92221 21.6854 9.65677 21.6854 9.38217 21.6304C8.59663 21.5773 7.81632 21.4641 7.04807 21.2918C5.96798 21.0812 4.68652 20.6419 4.2197 19.6808C4.0746 19.3747 3.99955 19.0401 4.00002 18.7014Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div><h4>Войти</h4></div>
  </div>
  <!-- <Teleport to="body"> -->
    <ModalWelcome
      v-if="popupModals.buttonModal"
      :TogglePopup="() => TogglePopup('buttonModal')"
      :popupModals="popupModals"
    />
  <!-- </Teleport> -->
</template>

<script>
import useLogout from "@/composables/useLogout";
import { ref } from "@vue/reactivity";
import { onMounted, watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { user, userName, userEmail } from "@/composables/useUser";
import ModalWelcome from "@/components/Welcome/ModalWelcome";
export default {
  components: { user, useLogout, ModalWelcome },
  setup() {
    const { error, logout } = useLogout();
    const router = useRouter();
    const infoRef = ref(null);

    const handleClickLogout = async () => {
      await logout();
      if (!error.value) {
        router.push("/");
      } else {
        console.log(error.value);
      }
    };
    const showPopup = ref(true);
    const userIsTrue = ref(false)

    const handleClickPopup = () => {
      userIsTrue.value = !userIsTrue.value;
    };
    onMounted(() => {
      document.body.addEventListener("click", (event) => {
        if (!event.path.includes(infoRef.value)) {
          userIsTrue.value = false;
        }
      });
    });
    watchEffect(() => {
      if (!user.value) {
        showPopup.value = false
      }else{
        showPopup.value = true
        console.log(user.value.displayName);
      }
    })

    const popupModals = ref({
      buttonModal: false,
    });

    const TogglePopup = (modal) => {
      popupModals.value[modal] = !popupModals.value[modal];
      // document.querySelector("body").style.overflow = "hidden";
    };

    return {
      showPopup,
      handleClickPopup,
      handleClickLogout,
      infoRef,
      popupModals,
      TogglePopup,
      userName,
      userEmail,
      userIsTrue
    };
  },
};
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding-top: 14px;
  position: relative;
padding: 8px 15px 0px 0px;
 
  &::before {
    content: "";
    height: 100%;
    width: 1px;
    background-color: #635c5a;
    margin: 0 21px 0 32px;

    @media (max-width: 1180px) {
      width: 0;
      margin: 0;
    }
  }
  &__login{
    &::before {
    content: "";
    height: 100%;
    width: 1px;
    background-color: #635c5a;
    margin: 0 21px 0 32px;

    @media (max-width: 1180px) {
      width: 0;
      margin: 0;
    }
  }
  }
  b {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
  &__label {
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
      transition: 0.2s;
      &.active {
        transform: rotate(0);
      }
    }
    span {
      color: #ffffff;
      border-bottom: 1px dashed #618967;
      cursor: pointer;
    }
  }

  &__popup {
    position: absolute;
    top: 40px;
    left: 30px;
    margin-top: 15px;
    background: #524f4e;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px 0;
    // max-width: 150px;
     @media (max-width: 1180px) {
       top: 40px;
    left: 0px;
  }
    &::after {
      position: absolute;
      content: "";
      top: 53px;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 100%
      );
    }
    ul {
      overflow: hidden;
      li {
        padding: 12px 20px;
        cursor: pointer;
        color: #ffff;
        &:hover {
          border-radius: 10px;
          background: #484747;
        }

        &.active {
          font-weight: bold;
          color: #ffff;
        }
      }
    }
  }
}
</style>