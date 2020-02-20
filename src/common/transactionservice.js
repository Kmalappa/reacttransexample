import axios  from "axios";

class TransactionService {
    constructor() {
        this.baseUrl= `${process.env.PUBLIC_URL}/data/transactionsdata.json`; // "http://reduxblog.herokuapp.com/api/posts"; 
    }
    getTransactionsList() {
        return axios.get(`${this.baseUrl}`).then((response) => {
            console.log('response', response);
            return response.data;
          }).catch((error)=>{
              console.log('error', error);
              return error;
          });
    }
}
export default (new TransactionService());