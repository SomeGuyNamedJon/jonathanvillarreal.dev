<script>
    import contactForm from '@/assets/json/form.json'
    import contactErr from '@/assets/json/errors.json'
    import emailjs from '@emailjs/browser'

    export default{ 
        setup(){
            emailjs.init('eE-trqXuIbiTQ-XvR');
            const json = contactForm
            const err = contactErr
            return {json, err}
        },
        name : 'ContactForm',
        data (){
            return {
                name : '',
                email : '',
                phone : '',
                method : '',
                comment : '',
                nameErr : '',
                emailErr : '',
                phoneErr : '',
                methodErr : '',
                commentErr : '',
                success : false,
            }
        },
        methods: {
            cssVars(e){
                const {currentTarget: target} = e

                const rect = target.getBoundingClientRect(),
                        x = e.clientX - rect.left,
                        y = e.clientY - rect.top
                
                target.style.setProperty("--relative-x", x+'px')
                target.style.setProperty("--relative-y", y+'px')
            },
            onSubmit(e){                
                e.preventDefault();
                console.log("Something")
                const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                const phoneRegex = /^(\+1)?(-|\.)?(\(\d{3}\)|\d{3})(-|\.)?\d{3}(-|\.)?\d{4}$/
                var valid = true //change to true when you want to turn emails on

                //validate fields
                if(this.name == ''){
                    this.nameErr = 'null'
                    valid = false
                }else{
                    this.nameErr = ''
                }
                
                if(this.phone == '' && this.method == 'Phone'){
                    this.phoneErr = 'null'
                    valid = false
                }else if(!phoneRegex.test(this.phone) && !(this.phone == '')){
                    this.phoneErr = 'invalid'
                    valid = false
                }else{
                    this.phoneErr = ''
                }

                if(this.email == '' && this.method == 'Email'){
                    this.emailErr = 'null'
                    valid = false
                }else if(!emailRegex.test(this.email) && !(this.email == '')){
                    this.emailErr = 'invalid'
                    valid = false
                }else{
                    this.emailErr = ''
                }

                if(this.method == ''){
                    this.methodErr = 'null'
                    valid = false
                }else{
                    this.methodErr = ''
                }

                if(this.comment == ''){
                    this.commentErr = 'null'
                    valid = false
                }else{
                    this.commentErr = ''
                }

                if(valid){
                    var trimmedString = (this.comment+' ').substr(0, 35);
                    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))

                    var body = {
                        "name" : this.name,
                        "email" : this.email,
                        "phone" : this.phone,
                        "comment" : this.comment,
                        "topic" : trimmedString+'...',
                        "method" : this.method
                    }
                    this.success = emailjs.send("submit_service","contact_form", body)
                    .then(function() {
                        console.log('SUCCESS!')
                        return true
                    }, function(error) {
                        console.log('FAILED...', error)
                        return false
                    })
                    if(this.email != ''){
                        emailjs.send("submit_service", "confirmation_msg", body)
                        .then(function() {
                            console.log('SUCCESS!')
                        }, function(error) {
                            console.log('FAILED...', error)
                        })
                    }
                }
                
                if(this.success){
                    this.name = '';
                    this.email = '';
                    this.phone = '';
                    this.address = '';
                    this.topic = '';
                    this.comment = '';
                    this.method = '';
                }
            } 
        }
    }
</script>

<template>
    <div class="contact-form" @mousemove="cssVars($event)">
    <form ref="contact-form" @submit="onSubmit"> 
        <div id="nameBox" :class="{'form-err' : nameErr}">
            <label class="form-label">{{json.name}}</label>
            <input class="form-input" type="text" id="name" v-model="name" :placeholder="json.name_ph">
            <div class="help-block" id="nameHelp">
                <p v-if="nameErr == 'null'">{{err.name_null}}</p>
            </div>
        </div>
        <div class="form-container">
            <div id="emailBox" :class="{'form-err' : emailErr}">
                <label class="form-label">{{json.email}}</label>
                <input class="form-input" type="text" id="email" v-model="email" :placeholder="json.email_ph">
                <div class="help-block" id="emailHelp">
                    <p v-if="emailErr == 'null'">{{err.email_null}}</p>
                    <p v-if="emailErr == 'invalid'">{{err.email_invalid}}</p>
                </div>
            </div>

            <div id="phoneBox" :class="{'form-err' : phoneErr}">
                <label class="form-label">{{json.phone}}</label>
                <input class="form-input" type="text" id="phone" v-model="phone" :placeholder="json.phone_ph">
                <div class="help-block" id="phoneHelp">
                    <p v-if="phoneErr == 'null'">{{err.phone_null}}</p>
                    <p v-if="phoneErr == 'invalid'">{{err.phone_invalid}}</p>
                </div>
            </div>
        </div>

        <div id="methodBox" :class="{'form-err' : methodErr}">
        <label class="form-label">{{json.method}}</label>
        <div class="methodOptions">
            <label for="contact-Email">
                <input class="form-radio" type="radio" id="contact-Email" v-model="method" value="Email">                      
                <svg class="contactSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
            </label>
            <label for="contact-Phone">
                <input class="form-radio" type="radio" id="contact-Phone" v-model="method" value="Phone">                      
                <svg class="contactSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
            </label>
        </div>
        <div class="help-block" id="methodHelp">
            <p v-if="methodErr == 'null'">{{ err.method_null }}</p>
        </div>
        </div>

        <div id="commentBox" :class="{'form-err' : commentErr}">
            <label class="form-label">{{json.msg}}</label>
            <textarea class="form-input" id="comment" v-model="comment" rows="10" :placeholder="json.msg_ph"></textarea>
            <div class="help-block" id="commentHelp">
                <p v-if="commentErr == 'null'">{{ err.message_null }}</p>
            </div>
        </div>
        
        <button class="btn">
            <font-awesome-icon icon="circle-check"/> &nbsp;{{json.submit}}
        </button>
    </form>
    <div v-if="success" class="success-box">{{json.success}}</div>
    </div>
</template>

<style scoped>
.contact-form {
    padding-top: 2.5%;
    padding-bottom: 3%;
    margin-inline: 10%;
    margin-bottom: 2.5%;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.26);
}
.form-input, .form-select{
    width: 100%;
    font-size: large;
    font-family: var(--main-font);
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    color: #fff;
    background-color: var(--background);
    border: 2px solid var(--purple);
    border-radius: 4px;
    box-sizing: border-box;
}
.form-input:disabled {
    background-color: #444;
    border: 2px dotted #a0a0a0;
    color: #909090;
}
.form-input:focus, .form-select:focus{
    outline: 2px solid var(--purple);
}
.form-err input, .form-err textarea {
    border: 2px solid var(--err-red);
}
.form-err input:focus, .form-err textarea:focus {
    outline: 2px solid #ff4343;
}
.form-err input[type=radio]:focus{
    outline: none;
}
.form-err input[type=radio] + svg{
    fill: var(--err-red);
}
.form-err label{
    color: var(--err-red);
}
.help-block{
    font-family: var(--alt-font);
    text-transform: uppercase;
    font-size: medium;
    color: var(--err-red);
    float: right;
    line-height: 1em;
}
.btn{
    width: 100%;
    background-color: var(--purple);
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.btn:hover {
    background-color: var(--deep-purple);
}
.success-box {
    border-radius: 15px;
    padding-block: 10px;
    margin-top: 2%;
    margin-inline: 12%;
    text-transform: uppercase;
    font-weight: bold;
    background-color: var(--success-green);
    text-align: center;
}
.form-container{
    display: flex;
    width: 100%;
}
#emailBox{
    width: 50%;
    margin-inline-end: 1vw;
}
#phoneBox{
    width: 50%
}
form {
    font-weight: bold;
    font-size: larger;
    border-radius: 5px;
    text-align: left;
    margin-inline: 10%;
}

.methodOptions{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}

.form-label {
    float: left;
    width: 100%;
    margin-top: 15px;
}

/*
* Pure CSS - SVG Radio Selector Buttons
* by Nikki Pantony // @nikkipantony // nikkipantony.com 
*/

.contactSVG {
  fill: var(--off-white);
  height: 2rem;
  width: 2rem;
  margin: 0.2rem;
}

input[type="radio"],
input[type="checkbox"] {
  position: absolute;
  opacity: 0;
}

input[type="radio"] + svg,
input[type="checkbox"] + svg {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

input + svg {
  cursor: pointer;
}

.form-radio:hover + svg,
.form-radio:focus + svg,
.form-check:hover + svg {
  fill: var(--purple) !important;
}

.form-radio:checked + svg,
.form-check:checked + svg {
  fill: var(--deep-purple) !important;
}

input.form-check {
  width: 2rem;
  height: 2rem;
}

@media screen and (max-width: 500px) {
    .form-container {
        display: block;
    }
    #phoneBox, #emailBox{
        width: 100%;
        margin-inline-end: 0;
    }
}
</style>