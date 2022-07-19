import { ref } from "vue";
import { auth } from "@/firebase/config";

const user = ref(auth.currentUser);
const userName = ref("");
const userEmail = ref("");

auth.onAuthStateChanged(async (_user) => {
  console.log("current user is:", _user);
  user.value = await _user;
  userName.value = await _user.displayName;
  userEmail.value = await _user.email;
});

export { user, userName, userEmail };
