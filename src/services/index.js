import axios from "axios";
const baseUrl = "http://localhost:3004"

export const getDataBook = async (setBooks, page) => {
    try {
        const res = await axios.get(`${baseUrl}/books?_page=${page}&_limit=3`);

        if(res.status===200) {
            setBooks(res.data);
        }
        
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

export const getDataBookMaster = async (setMasterBook) => {
    try {
        const res = await axios.get(`${baseUrl}/books`);

        if(res.status===200) {
            setMasterBook(res.data);
        }
        
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

export const getDataAuthor = async (setAuthor) => {
    try {
        const res = await axios.get(`${baseUrl}/author`);
    
        if(res.status === 200){
            setAuthor(res.data)
        }
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }

}

export const updateDataBook = async(value, id, optVal) => {
    try {
        const res = await axios.patch(`${baseUrl}/books/${id}`, {
            title : value.title,
            author: value.author,
            authorId: optVal,
            genre: value.genre,
            cover: value.cover,
            desc: value.desc
        });

        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

export const postDataBook = async (value, optVal) => {
    try {
        const res = await axios.post(`${baseUrl}/books`, {
            title : value.title,
            author: value.author,
            authorId: optVal,
            genre: value.genre,
            cover: value.cover,
            desc: value.desc
        })

        if(res.status===201)
        {
            console.log('berhasil');
        }
    } catch (error) {
        console.log(error);
    }
}

export const getDataBookById = async (id, setBook) => {
    try {
        const res = await axios.get(`${baseUrl}/books/${id}`);
    
        if(res.status === 200) {
            setBook(res.data);
        }
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

export const postDataAuthor = async(value) => {
    try {
        const res = await axios.post(`${baseUrl}/author`, {
            value : value.value,
            label : value.value,
            biografi : value.biografi
        })
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

export const updateAuthor = (id, value) => {
    try {
        const res = axios.patch(`${baseUrl}/author/${id}`, {
            value : value.value,
            label : value.value,
            biografi : value.biografi  
        })
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

export const getDataAuthorById = async (id, setAuthor) =>{
    try {
        const res = await axios.get(`${baseUrl}/author/${id}`);

        if(res.status === 200){
            setAuthor(res.data)
        }

        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}


export const deleteData = async (id, route) => {
    try {
        const res = await axios.delete(`${baseUrl}/${route}/${id}`);
        
        console.log(res);
        console.log(id)
    } catch (error) {
        console.log(error);
    }
}