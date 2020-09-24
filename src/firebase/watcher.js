import { Auth, Db } from '../config'


export function watchUserChnages(callback) {
    const unsub = Auth.onAuthStateChanged((user) => {
        if (user && !user.isAnonymous) {
            //console.log('usuario activo');
            callback({
                id: user.uid,
                email: user.email,
                displayName: user.displayName
            });
        } else {
            //console.log('Usuario no activo');
            callback(null);
        }
    });
    return unsub;
};



export function watchPlants(callback) {
    const unsub = Db.collection(process.env.REACT_APP_DATABASE_ID_PLANTS).onSnapshot((snapshot) => {
        const docs = []
        snapshot.forEach((doc) => {
            const data = doc.data();
            docs.push({
                ...data,
                id: doc.id
            });
        });

        callback(docs);

    })
    return unsub;
}; 

export function watchWeather(callback) {
    const unsub = Db.collection(process.env.REACT_APP_DATABASE_ID_WEATHER).onSnapshot((snapshot) => {
        const docs = []

        snapshot.forEach((doc) => {
            const data = doc.data();
            //console.log(data)
            docs.push({
                ...data,
                id: doc.id
            });
        });

        callback(docs);

    })
    return unsub;
}; 