import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"f5664e1f896d4114a9eae46cff8e501b"
    }
})