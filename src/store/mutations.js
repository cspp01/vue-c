export default{
    add : ( state ) => {
        state.num ++;
    },
    uppdateIfSid : ( state ) => {
        state.ifSid = !state.ifSid;
    }
}
