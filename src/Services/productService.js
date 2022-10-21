import axios from 'axios';

const productService = {
    getProduct: async () =>{
        try {
            const { data } = await axios.get('/db/data.json').then((responce) => responce);
            let products = await data
            return products
        } catch (error) {
            console.log(error);
        }
    }
};

export default productService;