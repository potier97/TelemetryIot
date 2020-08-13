import { Auth } from '../config'
 
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