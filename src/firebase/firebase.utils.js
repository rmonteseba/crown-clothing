// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyC0diUDYVWWFCNgWlSkSaaxI9bHvNysd0s",
    authDomain: "crwn-db-7419b.firebaseapp.com",
    projectId: "crwn-db-7419b",
    storageBucket: "crwn-db-7419b.appspot.com",
    messagingSenderId: "947658018514",
    appId: "1:947658018514:web:261a45ef81c32a6ea7270b"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({displayName, email, createdAt, ...additionalData})
        } catch (error) {
            console.error("User creation failed");
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()
    Object.values(objectsToAdd).forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data()
        return {
            id: doc.id,
            routeName: encodeURI(title),
            title,
            items
        }
    })

    return transformedCollection.reduce((object, collection) => {
        object[collection.title.toLowerCase()] = collection
        return object
    }, {})
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;