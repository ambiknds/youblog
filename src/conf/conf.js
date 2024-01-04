//use this if you are using create react app

// const conf = {
//   appwriteUrl: String(process.env.REACT_APP_APPWRITE_URL),
//   appwriteProjectId: String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
//   appwriteDatabaseId: String(process.env.REACT_APP_APPWRITE_DATABASE_ID),
//   appwriteCollectionID: String(process.env.REACT_APP_APPWRITE_COLLECTION_ID),
//   appwriteBucketId: String(process.env.REACT_APP_BUCKET_ID),
// };
// export default conf;

//use this if you are using vite js
const conf = {
  appwriteUrl: String(import.meta.env.REACT_APP_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.REACT_APP_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.REACT_APP_APPWRITE_DATABASE_ID),
  appwriteCollectionID: String(
    import.meta.env.REACT_APP_APPWRITE_COLLECTION_ID,
  ),
  appwriteBucketId: String(import.meta.env.REACT_APP_BUCKET_ID),
};
export default conf;
