import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  // Createad constructor 
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId)
    this.account = new Account(this.client)
  }

  //creating account authentication
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name)
      if (userAccount) {
        return this.login({ email, password })
      } else {
        return userAccount
      }
    } catch (error) {
      throw error
    }
  }

  //login authenticate
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password)
    } catch (error) {
      throw error
    }
  }

  //getting currentuser authenticate
  async getCurrentUser() {
    try {
      return await this.account.get()
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser() :: ", error);
    }
    return null;
  }

  //logout authenticate
  async logout() {
    try {
      await this.account.deleteSession()
    } catch (error) {
      console.log("Appwrite service :: logout() :: ", error);
    }
  }
}

const authService = new AuthService()

export default authService