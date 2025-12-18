import {Client, Databases, Query} from 'react-native-appwrite'

//track the searches 
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
    .setEndpoint('https://cloude.appwrite.io/v1')
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)


const database = new Databases(client);


export const updateSearchCount = async(query: String, movie: Movie) => {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal('searchTerm', query)
    ])

    console.log(result)


    //check if a record of that search has ben stored
    //if a document is found incremenrt the searchCount field 
    //if no document id found
       // create a new document in appwrite database
}

