import './App.css'
import { Button, Checkbox, Form, Input } from 'antd';

import { useState } from "react";
import Axios from "axios";


function App() {


  const onFinish = (values) => {
    console.log('Success:',  values);
    
    //sendForm(values)
    sndForm(values);


  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    
  };

  async function sndForm(values) {
    await Axios.post("http://localhost:5678/create", {
      values: values,
            
    }).then(() => {

      console.log("sent the req")


    });
  }

   const sendForm = (values) => { 

     Axios.post("http://localhost:5678/create", {
      values: values,
            
    }).then(() => {

      console.log("sent the req")


    });
  }

  return (
    <div className="App">

      
      <div className="top">


          <div className="head-title">
               
               <div>
               <Form
                    name="newForm"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    tyle={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                    
                            <Form.Item
                                  label="name"
                                  name="name"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'isim girmeniz lazim',
                                    },
                                  ]}
                                >
                                  <Input/>
                            </Form.Item>
                    
                    
                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button type="primary" htmlType="submit">
                        send
                      </Button>
                    </Form.Item>


              </Form> 
               </div>

          </div>

      </div>




    {/* App */}
    </div>
  )
}

export default App
