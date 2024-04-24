import { uploadPhoto, createUser } from "./utils";

async function asyncUploadUser() {
    try {
        const photoResponse = await uploadPhoto();
        const userResponse = await createUser();
        return {
            photo: photoResponse,
            user: userResponse
        };
    } catch (error) {
        console.error(error);
        return {
            photo: null,
            user: null
        };
    }
}

export default asyncUploadUser;
