export default{
    uppdateTitle : ( state, zt ) => {
        state.title = zt;
    },
    uppdateIfSid : ( state ) => {
        state.ifSid = !state.ifSid;
    },
    uppdateHeaderLeftIcon : ( state, zt ) => {
        if( zt === 'jj' ) {
            state.backStr --;
        } else {
            state.backStr = zt;
        }
    },
    uppdateIfActive : ( state, zt ) => {
        state.ifActive = zt;
    },
    uppdateBackStr : ( state, zt ) => {
    }
}
