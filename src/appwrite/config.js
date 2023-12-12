//databases config
import conf from '../conf/conf'
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client()
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId)
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }

  //get data
  async getPost(slug) {
    try {
      return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionID, slug)
    } catch (error) {
      console.log("Appwrite service :: getPost() :: ", error);
      return false
    }
  }

  //get status with queries
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionID, queries)
    } catch (error) {
      console.log("Appwrite service :: getPosts() :: ", error);
      return false
    }
  }

  //create post
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionID, slug, {
        title,
        content,
        featuredImage,
        status,
        userId

      })
    } catch (error) {
      console.log("Appwrite service :: createPost() :: ", error);
      return false
    }
  }
  //update data
  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionID, slug, {
        title,
        content,
        featuredImage,
        status

      })
    } catch (error) {
      console.log("Appwrite service :: updatePost() :: ", error);
      return false
    }
  }

  //delete data
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionID, slug)
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost() :: ", error);
      return false
    }
  }

  //storage service

  //upload file
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId
      )
    } catch (error) {
      console.log("Appwrite service :: uploadFile() :: ", error);
      return false
    }
  }

  //get file preview
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId).href
  }
}

const service = new Service()
export default service

