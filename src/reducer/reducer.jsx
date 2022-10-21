import { v4 as uuidv4 } from 'uuid';
const initialState = {
  products: [],
  loading: true,
  error: null
}


const reducer = (state = initialState, action) => {
  const switchSort = (sortType) => {
    switch (sortType) {
      case 'A-Z': return state.products.sort((a, b) => a.name.localeCompare(b.name))
      case 'Z-A': return state.products.sort((a, b) => b.name.localeCompare(a.name))
      case 'Max Count': return state.products.sort((a, b) => b.count - a.count)
      case 'Min Count': return state.products.sort((a, b) => a.count - b.count)
      default:
        break;
    }
  }
  const writedComment = (productId, inputValue) =>{
    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes() < 10 ? 0 : ''}${today.getMinutes()} `;
        const date = `${today.getDate()}.${today.getMonth() < 10 ? 0 : ''}${today.getMonth()}.${today.getFullYear()}`
        const comment = {
            id: uuidv4(),
            productId,
            description: inputValue,
            date: time + date
        }
        return state.products.map((item) => {
          const newCommentArr = [...item.comments, comment];
          if(item.id === productId){
            item.comments = newCommentArr
          }
          return item
        })
  }
  console.log(state)
  switch (action.type) {
    case 'PRODUCT': return {
      ...state,
      loading: false,
      products: action.payload
    }
    case 'EDIT': return {
      ...state,
      products: state.products.map(({ id, ...product }) => {
        if (id === action.payload.id) {
          return ({
            ...product,
            ...action.payload
          })
        }
        return ({
          id,
          ...product
        })
      })
    }
    case 'LOADING': return {
      ...state,
      loading: true
    }
    case 'ADD': return {
      ...state,
      products: [...state.products, {
        id: uuidv4(),
        imageUrl: "https://fotoinc.com/wp-content/uploads/2019/12/FOTO_Logo_Only-1.jpg",
        name: action.payload.name,
        count: action.payload.count,
        size: {
          "width": "auto",
          "height": "auto"
        },
        weight: action.payload.weight,
        comments: []
      },]
    }
    case 'ERROR': return {
      ...state,
      loading: false,
      error: action.payload
    }
    case 'SORT': return {
      ...state,
      products: switchSort(action.payload)
    }
    case 'COMMENT': return {
      ...state,
      products: writedComment(action.id,action.payload)
    }
    default: return state
  }
};

export default reducer;