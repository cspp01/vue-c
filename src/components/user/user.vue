<template>
    <section class="user">
        <form>
            <div class="inp">
                <input type="text" placeholder="输入手机号/邮箱"/>
            </div>
            <div class="inp">
                <input type="password" placeholder="输入密码/验证码"/>
            </div>
            <div>
                <a href="">登录</a>
            </div>
        </form>
    </section>
</template>
<script>
</script>
<style scoped lang="scss">
    .user{
        padding:.3rem;
        .inp{
            position:relative;
            margin-bottom:.3rem;
            width:100%;
            input{
                background:none;
                border:none;
                outline:none;
                padding-left:.2rem;
                font-size:.14rem;
                height:.34rem;
            }
            &::after{
                content:'';
                position:absolute;
                width:100%;
                height:.12rem;
                bottom:0;
                left:0;
                border:1px solid #c4c4c4;
                border-top-width:0;
            }
        }
        a{
            display:block;
            margin:.5rem auto 0;
            background:#fe8233;
            border-radius:.3rem;
            text-align:center;
            line-height:.38rem;
            color:#fff;
            font-size:.15rem;
            width:1.63rem;
            height:.38rem;
        }
    }
</style>