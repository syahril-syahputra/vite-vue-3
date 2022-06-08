import { toRefs, reactive, watch } from "vue";
import useBaseUrl from "./useBaseUrl";
/**
 * 
 * @param url Url Untuk Mendapatkan Data contoh http://api.lucy.test/user
 * @param option parameter
 * @method fetchData() untuk perintah eksekusi.
 * @returns hasil dari data yang di dapat
 * @copyright 2022, Lucy
 */
export default function(url : string, option : object){
    const state = reactive({
        response : {},
        error : {
            status : false,
            message : ""
        },
        isFetching : true
    })

    const fetchData = async () => {
        try {
            const result = await fetch(`${useBaseUrl}${url}`, option);
            const json =  await result.json()
            state.response = json;
        } catch (error){
             state.error.status = true
            // state.error.message = error
            
        } finally {
            state.isFetching = false
        }
    }
    fetchData()
    return {...toRefs(state)}
}