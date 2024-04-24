import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
        .then((results) => {
            const [photoResponse, userResponse] = results;
            console.log(`${photoResponse.body.firstName} ${userResponse.body.lastName}`);
        })
        .catch((error) => {
            console.log('Signup system offline');
        });
}

export default handleProfileSignup;
