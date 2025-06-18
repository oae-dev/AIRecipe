
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';


export type IngredientsType = {
  icon: string,
  ingredient: string,
  quantity: string
}

export type AddDatatype = {
  recipeName: string,
  description: String,
  ingredients: IngredientsType[],
  steps: string[],
  calories: number,
  cookTime: number,
  serveTo: number,
  imagePrompt: string
}

const firebaseConfig = {
  apiKey: 'AIzaSyBRu5qdHeQhQlU2blo9_l9ICaSxjAa6XcQ',
  authDomain: 'airespies.firebaseapp.com',
  projectId: 'airespies',
  storageBucket: 'airespies.appspot.com',
  messagingSenderId: '319205630882',
  appId: '1:319205630882:android:711140df30e0953c9588fb',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


export const AddData = async (data: any) => {
  const docRef = await addDoc(collection(db, 'Recipies'), {
    recipeName: data.recipeName,
    description: data.description,
    ingredients: data.ingredients,
    steps: data.steps,
    calories: data.calories,
    cookTime: data.cookTime,
    serveTo: data.serveTo,
    imagePrompt: data.imagePrompt,

  });
  console.log('Document written with ID: ', docRef.id);
};


export const FetchData = async ()=>{

  let list:any = [];
  const docSnap = await getDocs(collection(db, 'Recipies'));
  docSnap.forEach(doco=>{
    console.log(doco.id, ' => ', doco.data());
    list.push(doco.data());
  });

  console.log('FullData' , list);
  return list;
};

export const DeleteFav = async (recipeName?: string)=>{
  console.log('reName',recipeName);
   const q = query(collection(db, 'Recipies'), where('recipeName', '==', recipeName));
   const snapshot = await getDocs(q);
   console.log('snapshot',snapshot);
    snapshot.forEach(async (docItem) => {
    await deleteDoc(doc(db, 'Recipies', docItem.id));
  });
};





// export const listenToData = (onDataUpdate: (data: any[]) => void) => {
//   const unsubscribe = onSnapshot(collection(db, "Recipies"), (snapshot) => {
//     let list: any[] = [];

//     snapshot.forEach(doc => {
//       console.log(doc.id, ' => ', doc.data());
//       list.push({
//         id: doc.id,       // Include document ID
//         ...doc.data()     // Spread the rest of the data
//       });
//     });

//     console.log('FullData', list);
//     onDataUpdate(list);
//   });

//   return unsubscribe; // Caller should use this to stop listening
// };
