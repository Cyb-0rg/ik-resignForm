import './App.css'
import { Button, Checkbox, Form, Input } from 'antd';



function App() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="App">

      
      <div className="top">


          <div className="head-title">
              <h1> GSI ÇIKIŞ MÜLAKATI FORMU </h1> 
          </div>

          <div className="head-box">
            <p> Gizlidir</p>
          </div>

      </div>



      <div className="middle-region">

          <div className="disclaimer">

            <p>
                Sizden GSI Çıkış Mülakat Formu’nu doldurmanızı rica ederiz. GSI’dan ayrılmaya karar vermenizin 
                nedenleri konusunda sağlayacağınız bilgilerin ve bizimle paylaşacağınız GSI ile ilgili düşüncelerinizin, 
                memnuniyetsizliklerinizi daha iyi anlama fırsatını yakalamamızı, çalışma ortamımızı sürekli olarak 
                geliştirmemizi ve bu yolla misyonumuzu tam olarak yerine getirerek vizyonumuzu gerçekleştirmemizi 
                sağlayacağımızı umuyoruz.
                Bize sağlayacağınız dürüst geribildirimler, yukarıda belirtilen hedeflerimizin başarıya ulaşması 
                açısından çok önemlidir. Tüm yanıtlarınız, İnsan Kaynakları Bölümü’müz tarafından değerlendirilecek, 
                gizli tutulacak ve GSI’da size yöneticilik yapmış kişilerle paylaşılmayacaktır.
                Katılımınız için teşekkür ederiz.
                İnsan Kaynakları
            </p>

          {/* disclaimer */}
          </div>



          <div className="chapters-container">

        <Form
            name="resignForm"
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

              <div className="chapter-1">

                    <div className="title">
                        <p>
                            BÖLÜM I : ÇALIŞAN BİLGİLERİ
                        </p>
                    </div>


                    <div className="ques-list-1">



                        <Form.Item
                          label="Adı, Soyadı"
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: 'Adı, Soyadı',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          label="İşe Giriş Tarih"
                          name="date"
                          rules={[
                            {
                              required: true,
                              message: 'İşe Giriş Tarih',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          label="Departmanı "
                          name="Departman"
                          rules={[
                            {
                              required: true,
                              message: 'Departmanı',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>


                        <Form.Item
                          label="İşten Ayrılma Tarihi"
                          name="dateOfdeparture"
                          rules={[
                            {
                              required: true,
                              message: 'İşten Ayrılma Tarihi',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>


                        <Form.Item
                          label="Pozisyonu"
                          name="Pozisyonu"
                          rules={[
                            {
                              required: true,
                              message: 'Pozisyonu',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>


                        <Form.Item
                          label="Kişisel E-mail Adresi"
                          name="address"
                          rules={[
                            {
                              required: true,
                              message: 'Kişisel E-mail Adresi',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>



                        

                    {/* ques-list-1 */}
                    </div>


              {/* chapter-1 */}
              </div>

              {/* to be done */}
              <div className="chapter-2">


              <div className="title">
                        <p>
                            BÖLÜM II : GSI’DAN AYRILMA NEDENLER
                        </p>
                    </div>


                    <div className="disclaimer-2">
                      <p>
                        GSI’dan ayrılma kararınız aşağıdaki nedenlerden hangisi ya da hangileri tarafından etkilendi?
                        DEĞERLENDİRME AÇIKLAMASI: Seçenekler arasından, ayrılmanızda etkisi olan maksimum 3 nedeni, toplamda 
                        %100 değerine ulaşacak şekilde oranlayınız. 
                      </p>
                    </div>


                    <div class="ques-list-2">

                            <table>
                              <tr>
                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>Toplam Kazanç Paket</Checkbox>
                                </Form.Item>
                                </td>

                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>ektör Değiştirme / İşyeri Açma</Checkbox>
                                </Form.Item>
                                </td>
                                
                              </tr>

                              <tr>
                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>Kariyer ve Gelişim Fırsatları</Checkbox>
                                </Form.Item>
                                </td>

                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>irket Kültürü</Checkbox>
                                </Form.Item>
                                </td>
                                
                              </tr>

                              <tr>
                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>İş Yükü & Fazla Mesai</Checkbox>
                                </Form.Item>
                                </td>

                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>Eğitime Devam Etme</Checkbox>
                                </Form.Item>
                                </td>
                                
                              </tr>

                              <tr>
                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>Yönetici ile Anlaşmazlık</Checkbox>
                                </Form.Item>
                                </td>

                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>Askerlik</Checkbox>
                                </Form.Item>
                                </td>
                                
                              </tr>

                              <tr>
                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>İşin Niteliği</Checkbox>
                                </Form.Item>
                                </td>

                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>Evlilik</Checkbox>
                                </Form.Item>
                                </td>
                                
                              </tr>

                              <tr>
                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>Çalışma Arkadaşları ile Anlaşmazlık</Checkbox>
                                </Form.Item>
                                </td>

                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>Emeklilik</Checkbox>
                                </Form.Item>
                                </td>
                                
                              </tr>

                              <tr>
                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>Fiziksel Çalışma Koşulları</Checkbox>
                                </Form.Item>
                                </td>

                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>Sağlık Nedenleri</Checkbox>
                                </Form.Item>
                                </td>
                                
                              </tr>

                              <tr>
                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>Yeni Bir İş Bulma</Checkbox>
                                </Form.Item>
                                </td>

                                <td>

                                <Form.Item
                                  name=""
                                  valuePropName=""
                                  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                  }}
                                >
                                  <Checkbox>Şirket Yönetimi</Checkbox>
                                </Form.Item>
                                </td>
                                
                              </tr>

                              <tr>
                              <Form.Item
                                label="Diğer"
                                name="explanation"
                                rules={[
                                  {
                                    required: true,
                                    message: '',
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                              </tr>

                              
                            </table>

                    
                    {/* ques-list-2 */}
                    </div>
              

              {/* chapter-2 */}
              </div>

            
              <div className="chapter-3">


              <div className="title">
                  <p>
                  BÖLÜM III : TOPLAM KAZANÇ PAKETİ / DEĞERLENDİRME
                  </p>
              </div>


          <div className="disclaimer-3">
            <p>
              GSI’dan ayrılma kararınız aşağıdaki nedenlerden hangisi ya da hangileri tarafından etkilendi?
              DEĞERLENDİRME AÇIKLAMASI: Seçenekler arasından, ayrılmanızda etkisi olan maksimum 3 nedeni, toplamda 
              %100 değerine ulaşacak şekilde oranlayınız. 
            </p>
          </div>


          <div class="ques-list-3">

                      
              <div class="ques-list-3-table">

              <table >


              <tr>
                <th>
                    Değerlendirme Konuları :
                </th>

                <th>
                    Yetersiz <br></br>(1)
                </th>

                <th>
                    Yeterli <br></br>(2)
                </th>

                <th>
                    Çok iyi <br></br>(3)
                </th>

                <th>
                    Yorumlarınız
                </th>
            </tr> 



            <tr>

            <td>
                <label>
                    Baz Ücret (Hak ettiğiniz ücreti aldığınızı düşünüyor musunuz?)
                </label>
            </td>

            <td>
                <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>


            </td>

            <td>
              <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>
            </td>

            <td>
                <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>
            </td>

            <td>
                        <Form.Item
                          label=""
                          name="explanation"
                          rules={[
                            {
                              required: true,
                              message: '',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
            </td>

            </tr>



            <tr>

              <td>
                  <label>
                      Ek Menfaatler (Prim, Yemek, Ulaşım v.b.)
                  </label>
              </td>

              <td>
                <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>


            </td>

            <td>
              <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>
            </td>

            <td>
                <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>
            </td>

            <td>
                        <Form.Item
                          label=""
                          name="explanation"
                          rules={[
                            {
                              required: true,
                              message: '',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
            </td>

              </tr>




              <tr>

                <td>
                    <label>
                        Kıdeme Göre Ücret Artışları
                    </label>
                </td>

                <td>
                  <Form.Item
                    name=""
                    valuePropName=""
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox></Checkbox>
                  </Form.Item>


                </td>

                <td>
                <Form.Item
                    name=""
                    valuePropName=""
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox></Checkbox>
                  </Form.Item>
                </td>

                <td>
                  <Form.Item
                        name=""
                        valuePropName=""
                        wrapperCol={{
                          offset: 8,
                          span: 16,
                        }}
                      >
                        <Checkbox></Checkbox>
                      </Form.Item>
                </td>

                <td>
                          <Form.Item
                            label=""
                            name="explanation"
                            rules={[
                              {
                                required: true,
                                message: '',
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                </td>

                </tr>


            </table>
                              
                    
              {/* ques-list-3-table */}
              </div>        
          
          {/* ques-list-3 */}
          </div>


    {/* chapter-3 */}
                  </div>


              <div className="chapter-4">


              <div className="title">
                  <p>
                      BÖLÜM IV: KİŞİSEL GELİŞİM / DEĞERLENDİRME
                  </p>
              </div>


              <div class="ques-list-4">

                      
              <div class="ques-list-4-table">

              <table >


              <tr>
                <th>
                    Değerlendirme Konuları :
                </th>

                <th>
                    Yetersiz <br></br>(1)
                </th>

                <th>
                    Yeterli <br></br>(2)
                </th>

                <th>
                    Çok iyi <br></br>(3)
                </th>

                <th>
                    Yorumlarınız
                </th>
              </tr> 



              <tr>

              <td>
                <label>
                    Kişisel Gelişim Fırsatları	
                </label>
              </td>

              <td>
                <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>


              </td>

              <td>
              <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>
              </td>

              <td>
                <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>
              </td>

              <td>
                        <Form.Item
                          label=""
                          name="explanation"
                          rules={[
                            {
                              required: true,
                              message: '',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
              </td>

              </tr>



              <tr>

              <td>
                  <label>
                       Eğitim ve Proje Çalışması Fırsatları	
                  </label>
              </td>

              <td>
                <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>


              </td>

              <td>
              <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>
              </td>

              <td>
                <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>
              </td>

              <td>
                        <Form.Item
                          label=""
                          name="explanation"
                          rules={[
                            {
                              required: true,
                              message: '',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
              </td>

              </tr>




              <tr>

                <td>
                    <label>
                        şbaşı Eğitimleri Etkinliği	
                    </label>
                </td>

                <td>
                  <Form.Item
                    name=""
                    valuePropName=""
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox></Checkbox>
                  </Form.Item>


                </td>

                <td>
                <Form.Item
                    name=""
                    valuePropName=""
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox></Checkbox>
                  </Form.Item>
                </td>

                <td>
                  <Form.Item
                        name=""
                        valuePropName=""
                        wrapperCol={{
                          offset: 8,
                          span: 16,
                        }}
                      >
                        <Checkbox></Checkbox>
                      </Form.Item>
                </td>

                <td>
                          <Form.Item
                            label=""
                            name="explanation"
                            rules={[
                              {
                                required: true,
                                message: '',
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                </td>

                </tr>


              </table>
                              
                    
              {/* ques-list-4-table */}
              </div>        

              {/* ques-list-4 */}
              </div>


              {/* chapter-4 */}
              </div>


              <div className="chapter-5">


                  <div className="title">
                      <p>
                         BÖLÜM V: İLETİŞİM / DEĞERLENDİRME
                      </p>
                  </div>


                  <div class="ques-list-5">

                          
                  <div class="ques-list-5-table">

                  <table >


                  <tr>
                    <th>
                        Değerlendirme Konuları :
                    </th>

                    <th>
                        Yetersiz <br></br>(1)
                    </th>

                    <th>
                        Yeterli <br></br>(2)
                    </th>

                    <th>
                        Çok iyi <br></br>(3)
                    </th>

                    <th>
                        Yorumlarınız
                    </th>
                  </tr> 



                  <tr>

                  <td>
                    <label>
                         Bölüm İçi İletişim ve İşbirliği	
                    </label>
                  </td>

                  <td>
                    <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>


                  </td>

                  <td>
                  <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>
                  </td>

                  <td>
                    <Form.Item
                          name=""
                          valuePropName=""
                          wrapperCol={{
                            offset: 8,
                            span: 16,
                          }}
                        >
                          <Checkbox></Checkbox>
                        </Form.Item>
                  </td>

                  <td>
                            <Form.Item
                              label=""
                              name="explanation"
                              rules={[
                                {
                                  required: true,
                                  message: '',
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                  </td>

                  </tr>



                  <tr>

                  <td>
                      <label>
                          Bölümler Arası İletişim ve İşbirliği	  
                      </label>
                  </td>

                  <td>
                    <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>


                  </td>

                  <td>
                  <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>
                  </td>

                  <td>
                    <Form.Item
                          name=""
                          valuePropName=""
                          wrapperCol={{
                            offset: 8,
                            span: 16,
                          }}
                        >
                          <Checkbox></Checkbox>
                        </Form.Item>
                  </td>

                  <td>
                            <Form.Item
                              label=""
                              name="explanation"
                              rules={[
                                {
                                  required: true,
                                  message: '',
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                  </td>

                  </tr>


              </table>
                              
                    
              {/* ques-list-5-table */}
              </div>        

              {/* ques-list-5 */}
              </div>


              {/* chapter-5 */}
              </div>


              <div className="chapter-6">


              <div className="title">
                  <p>
                      BÖLÜM VI: LİDERLİK YETKİNLİKLERİ / DEĞERLENDİRME
                  </p>
              </div>

              <div className="disclaimer-6">
                  <p>
                      Yöneticinizin liderlik yetkinliklerini değerlendiriniz
                  </p>
              </div>


              <div class="ques-list-6">

                      
              <div class="ques-list-6-table">

              <table >


              <tr>
                <th>
                    Değerlendirme Konuları :
                </th>

                <th>
                    Yetersiz <br></br>(1)
                </th>

                <th>
                    Yeterli <br></br>(2)
                </th>

                <th>
                    Çok iyi <br></br>(3)
                </th>

                <th>
                    Yorumlarınız
                </th>
              </tr> 



              <tr>

              <td>
                <label>
                      Ekip Performansının Geliştirilmes	      
                </label>
              </td>

              <td>
                <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>


              </td>

              <td>
              <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>
              </td>

              <td>
                <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>
              </td>

              <td>
                        <Form.Item
                          label=""
                          name="explanation"
                          rules={[
                            {
                              required: true,
                              message: '',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
              </td>

              </tr>



              <tr>

              <td>
                  <label>
                      Bilginin Aranması, İzlenmesi ve Dağıtılması	
                  </label>
              </td>

              <td>
                <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>


              </td>

              <td>
              <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>
              </td>

              <td>
                <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>
              </td>

              <td>
                        <Form.Item
                          label=""
                          name="explanation"
                          rules={[
                            {
                              required: true,
                              message: '',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
              </td>

              </tr>




              <tr>

                <td>
                    <label>
                          Krizlerin Çözümünde Etkin Rol Üstlenilmes	
                    </label>
                </td>

                <td>
                  <Form.Item
                    name=""
                    valuePropName=""
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox></Checkbox>
                  </Form.Item>


                </td>

                <td>
                <Form.Item
                    name=""
                    valuePropName=""
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox></Checkbox>
                  </Form.Item>
                </td>

                <td>
                  <Form.Item
                        name=""
                        valuePropName=""
                        wrapperCol={{
                          offset: 8,
                          span: 16,
                        }}
                      >
                        <Checkbox></Checkbox>
                      </Form.Item>
                </td>

                <td>
                          <Form.Item
                            label=""
                            name="explanation"
                            rules={[
                              {
                                required: true,
                                message: '',
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                </td>

                </tr>


                <tr>

                  <td>
                      <label>
                            GSI Vizyon, Misyon ve Değerlerine Uygun Çalışılması	
                      </label>
                  </td>

                  <td>
                    <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>


                  </td>

                  <td>
                  <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>
                  </td>

                  <td>
                    <Form.Item
                          name=""
                          valuePropName=""
                          wrapperCol={{
                            offset: 8,
                            span: 16,
                          }}
                        >
                          <Checkbox></Checkbox>
                        </Form.Item>
                  </td>

                  <td>
                            <Form.Item
                              label=""
                              name="explanation"
                              rules={[
                                {
                                  required: true,
                                  message: '',
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                  </td>

                  </tr>




                  <tr>

                  <td>
                      <label>
                          Bireysel Performansın ve Motivasyonun Geliştirilmes	
                      </label>
                  </td>

                  <td>
                    <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>


                  </td>

                  <td>
                  <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>
                  </td>

                  <td>
                    <Form.Item
                          name=""
                          valuePropName=""
                          wrapperCol={{
                            offset: 8,
                            span: 16,
                          }}
                        >
                          <Checkbox></Checkbox>
                        </Form.Item>
                  </td>

                  <td>
                            <Form.Item
                              label=""
                              name="explanation"
                              rules={[
                                {
                                  required: true,
                                  message: '',
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                  </td>

                  </tr>


              </table>
                              
                    
              {/* <ques-list-6></ques-list-6>-table */}
              </div>        

              {/* ques-list-6 */}
              </div>


              {/* chapter-6 */}
              </div>


              <div className="chapter-7">


            <div className="title">
                <p>
                    BÖLÜM VII: İŞ / DEĞERLENDİRME
                </p>
            </div>


            <div class="ques-list-7">

                    
            <div class="ques-list-7-table">

            <table >


            <tr>
              <th>
                  Değerlendirme Konuları :
              </th>

              <th>
                  Yetersiz <br></br>(1)
              </th>

              <th>
                  Yeterli <br></br>(2)
              </th>

              <th>
                  Çok iyi <br></br>(3)
              </th>

              <th>
                  Yorumlarınız
              </th>
            </tr> 



            <tr>

            <td>
              <label>
                 Çalışma Saatleri (İş-Sosyal Hayat Dengesi)	    
              </label>
            </td>

            <td>
              <Form.Item
                name=""
                valuePropName=""
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox></Checkbox>
              </Form.Item>


            </td>

            <td>
            <Form.Item
                name=""
                valuePropName=""
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </td>

            <td>
              <Form.Item
                    name=""
                    valuePropName=""
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox></Checkbox>
                  </Form.Item>
            </td>

            <td>
                      <Form.Item
                        label=""
                        name="explanation"
                        rules={[
                          {
                            required: true,
                            message: '',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
            </td>

            </tr>



            <tr>

            <td>
                <label>
                    Prosedür ve Rehberlerin Etkinliği / Yeterli Bilgi ve Kaynağa Ulaşabilme	
                </label>
            </td>

            <td>
              <Form.Item
                name=""
                valuePropName=""
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox></Checkbox>
              </Form.Item>


            </td>

            <td>
            <Form.Item
                name=""
                valuePropName=""
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </td>

            <td>
              <Form.Item
                    name=""
                    valuePropName=""
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox></Checkbox>
                  </Form.Item>
            </td>

            <td>
                      <Form.Item
                        label=""
                        name="explanation"
                        rules={[
                          {
                            required: true,
                            message: '',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
            </td>

            </tr>




            <tr>

              <td>
                  <label>
                     Görev Tanımının Açık ve Net Olması	
                  </label>
              </td>

              <td>
                <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>


              </td>

              <td>
              <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>
              </td>

              <td>
                <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>
              </td>

              <td>
                        <Form.Item
                          label=""
                          name="explanation"
                          rules={[
                            {
                              required: true,
                              message: '',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
              </td>

              </tr>


              <tr>

            <td>
            <label>
                Görevin Şirket Sonuçlarına Katkısını Görme	
            </label>
            </td>

            <td>
            <Form.Item
            name=""
            valuePropName=""
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            >
            <Checkbox></Checkbox>
            </Form.Item>


            </td>

            <td>
            <Form.Item
            name=""
            valuePropName=""
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            >
            <Checkbox></Checkbox>
            </Form.Item>
            </td>

            <td>
            <Form.Item
            name=""
            valuePropName=""
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            >
            <Checkbox></Checkbox>
            </Form.Item>
            </td>

            <td>
            <Form.Item
            label=""
            name="explanation"
            rules={[
            {
              required: true,
              message: '',
            },
            ]}
            >
            <Input />
            </Form.Item>
            </td>

            </tr>




            <tr>

            <td>
            <label>
                 Sorumluluk Alanları İçerisinde Karar Verebilme	
            </label>
            </td>

            <td>
            <Form.Item
            name=""
            valuePropName=""
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            >
            <Checkbox></Checkbox>
            </Form.Item>


            </td>

            <td>
            <Form.Item
            name=""
            valuePropName=""
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            >
            <Checkbox></Checkbox>
            </Form.Item>
            </td>

            <td>
            <Form.Item
            name=""
            valuePropName=""
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            >
            <Checkbox></Checkbox>
            </Form.Item>
            </td>

            <td>
            <Form.Item
            label=""
            name="explanation"
            rules={[
            {
              required: true,
              message: '',
            },
            ]}
            >
            <Input />
            </Form.Item>
            </td>

            </tr>

            <tr>

            <td>
            <label>
                Yaratıcılık ve Yenilik Fırsatının Tanınması ve Teşviki	
            </label>
            </td>

            <td>
            <Form.Item
            name=""
            valuePropName=""
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            >
            <Checkbox></Checkbox>
            </Form.Item>


            </td>

            <td>
            <Form.Item
            name=""
            valuePropName=""
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            >
            <Checkbox></Checkbox>
            </Form.Item>
            </td>

            <td>
            <Form.Item
            name=""
            valuePropName=""
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            >
            <Checkbox></Checkbox>
            </Form.Item>
            </td>

            <td>
            <Form.Item
            label=""
            name="explanation"
            rules={[
            {
              required: true,
              message: '',
            },
            ]}
            >
            <Input />
            </Form.Item>
            </td>

            </tr>


            <tr>

            <td>
            <label>
                Fiziksel Çalışma Koşulları ve Sağlanan Araç ve Gereçler	
            </label>
            </td>

            <td>
            <Form.Item
            name=""
            valuePropName=""
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            >
            <Checkbox></Checkbox>
            </Form.Item>


            </td>

            <td>
            <Form.Item
            name=""
            valuePropName=""
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            >
            <Checkbox></Checkbox>
            </Form.Item>
            </td>

            <td>
            <Form.Item
            name=""
            valuePropName=""
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            >
            <Checkbox></Checkbox>
            </Form.Item>
            </td>

            <td>
            <Form.Item
            label=""
            name="explanation"
            rules={[
            {
              required: true,
              message: '',
            },
            ]}
            >
            <Input />
            </Form.Item>
            </td>

            </tr>


            <tr>

            <td>
            <label>
                Terfi İmkanlarının Yeterli Olması	
            </label>
            </td>

            <td>
            <Form.Item
            name=""
            valuePropName=""
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            >
            <Checkbox></Checkbox>
            </Form.Item>


            </td>

            <td>
            <Form.Item
            name=""
            valuePropName=""
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            >
            <Checkbox></Checkbox>
            </Form.Item>
            </td>

            <td>
            <Form.Item
            name=""
            valuePropName=""
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            >
            <Checkbox></Checkbox>
            </Form.Item>
            </td>

            <td>
            <Form.Item
            label=""
            name="explanation"
            rules={[
            {
              required: true,
              message: '',
            },
            ]}
            >
            <Input />
            </Form.Item>
            </td>

            </tr>




            </table>
                            
                  
            {/* <ques-list-7></ques-list-7>-table */}
            </div>        

            {/* ques-list-7 */}
            </div>


            {/* chapter-7 */}
              </div>

              <div className="chapter-8">


              <div className="title">
                  <p>
                      BÖLÜM VIII: ŞİRKET YÖNETİMİ VE ŞİRKET ALGISI
                  </p>
              </div>


              <div class="ques-list-8">

                      
              <div class="ques-list-8-table">

              <table >


              <tr>
                <th>
                    Değerlendirme Konuları :
                </th>

                <th>
                    Yetersiz <br></br>(1)
                </th>

                <th>
                    Yeterli <br></br>(2)
                </th>

                <th>
                    Çok iyi <br></br>(3)
                </th>

                <th>
                    Yorumlarınız
                </th>
              </tr> 



              <tr>

              <td>
                <label>
                    Şirketin Vizyon ve Misyonuna Göre Hareket Etme	
                </label>
              </td>

              <td>
                <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>


              </td>

              <td>
              <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>
              </td>

              <td>
                <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>
              </td>

              <td>
                        <Form.Item
                          label=""
                          name="explanation"
                          rules={[
                            {
                              required: true,
                              message: '',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
              </td>

              </tr>



              <tr>

              <td>
                  <label>
                       Sektördeki Değişimlere Karşı Önlem Alma ve Aksiyon Planı Hazırlama	
                  </label>
              </td>

              <td>
                <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>


              </td>

              <td>
              <Form.Item
                  name=""
                  valuePropName=""
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox></Checkbox>
                </Form.Item>
              </td>

              <td>
                <Form.Item
                      name=""
                      valuePropName=""
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox></Checkbox>
                    </Form.Item>
              </td>

              <td>
                        <Form.Item
                          label=""
                          name="explanation"
                          rules={[
                            {
                              required: true,
                              message: '',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
              </td>

              </tr>




              <tr>

                <td>
                    <label>
                        Çalışanların İstek, Öneri ve Şikayetlerini Dikkate Alma, Sonuca Bağlama	
                    </label>
                </td>

                <td>
                  <Form.Item
                    name=""
                    valuePropName=""
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox></Checkbox>
                  </Form.Item>


                </td>

                <td>
                <Form.Item
                    name=""
                    valuePropName=""
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox></Checkbox>
                  </Form.Item>
                </td>

                <td>
                  <Form.Item
                        name=""
                        valuePropName=""
                        wrapperCol={{
                          offset: 8,
                          span: 16,
                        }}
                      >
                        <Checkbox></Checkbox>
                      </Form.Item>
                </td>

                <td>
                          <Form.Item
                            label=""
                            name="explanation"
                            rules={[
                              {
                                required: true,
                                message: '',
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                </td>

                </tr>


                <tr>

              <td>
              <label>
                  Yaratıcılık ve Yeniliği Destekleme	    
              </label>
              </td>

              <td>
              <Form.Item
              name=""
              valuePropName=""
              wrapperCol={{
              offset: 8,
              span: 16,
              }}
              >
              <Checkbox></Checkbox>
              </Form.Item>


              </td>

              <td>
              <Form.Item
              name=""
              valuePropName=""
              wrapperCol={{
              offset: 8,
              span: 16,
              }}
              >
              <Checkbox></Checkbox>
              </Form.Item>
              </td>

              <td>
              <Form.Item
              name=""
              valuePropName=""
              wrapperCol={{
              offset: 8,
              span: 16,
              }}
              >
              <Checkbox></Checkbox>
              </Form.Item>
              </td>

              <td>
              <Form.Item
              label=""
              name="explanation"
              rules={[
              {
                required: true,
                message: '',
              },
              ]}
              >
              <Input />
              </Form.Item>
              </td>

              </tr>




              <tr>

              <td>
              <label>
                  Sektörde Öncü ve Lider Olma	
              </label>
              </td>

              <td>
              <Form.Item
              name=""
              valuePropName=""
              wrapperCol={{
              offset: 8,
              span: 16,
              }}
              >
              <Checkbox></Checkbox>
              </Form.Item>


              </td>

              <td>
              <Form.Item
              name=""
              valuePropName=""
              wrapperCol={{
              offset: 8,
              span: 16,
              }}
              >
              <Checkbox></Checkbox>
              </Form.Item>
              </td>

              <td>
              <Form.Item
              name=""
              valuePropName=""
              wrapperCol={{
              offset: 8,
              span: 16,
              }}
              >
              <Checkbox></Checkbox>
              </Form.Item>
              </td>

              <td>
              <Form.Item
              label=""
              name="explanation"
              rules={[
              {
                required: true,
                message: '',
              },
              ]}
              >
              <Input />
              </Form.Item>
              </td>

              </tr>




              </table>
                              
                    
              {/* <ques-list-7></ques-list-7>-table */}
              </div>        

              {/* ques-list-7 */}
              </div>


              {/* chapter-8 */}
              </div>


              <div className="chapter-9">

              <div className="title">
                  <p>
                      BÖLÜM IX: GENEL BİLGİLER
                  </p>
              </div>


              <div className="ques-list-9">


                  <div className='Q-9-1'>

                    <label>
                        1. GSI’yı başkalarına tavsiye eder misiniz?
                    </label>

                    <table>
                      <tr>
                          <td>
                          <Form.Item
                              name=""
                              valuePropName=""
                              wrapperCol={{
                                offset: 8,
                                span: 16,
                              }}
                            >
                              <Checkbox>Evet</Checkbox>
                          </Form.Item>
                          </td>

                          <td>

                          <Form.Item
                            name=""
                            valuePropName=""
                            wrapperCol={{
                              offset: 8,
                              span: 16,
                            }}
                          >
                            <Checkbox>Hayır</Checkbox>
                          </Form.Item>
                            
                          </td>
                      </tr>
                    </table>


                    

                    <Form.Item
                    label="Açıklayınız"
                    name="explanation"
                    rules={[
                      {
                        required: true,
                        message: 'Açıklayınız',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  </div>

                  <div className='Q-9-2'>

                    <label>
                      2. GSI, sizin çalışmaya devam etmenizi sağlamak için ne yapabilirdi?
                    </label>

                    <Form.Item
                    label="Açıklayınız"
                    name="explanation"
                    rules={[
                      {
                        required: true,
                        message: 'Açıklayınız',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  </div>

                  <div className='Q-9-3'>

                    <label>
                      3. GSI’da çalıştığınız süre içerisinde, işinizle ilgili en çok neyi sevdiniz?
                    </label>

                    <Form.Item
                    label="Açıklayınız"
                    name="explanation"
                    rules={[
                      {
                        required: true,
                        message: 'Açıklayınız',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                </div>

                <div className='Q-9-4'>
                  <label>
                  4. GSI’da çalıştığınız süre içerisinde, ofis ilgili en az sevdiğiniz 3 şeyi paylaşabilir misiniz?
                  </label>


                  <Form.Item
                    label="Açıklayınız"
                    name="explanation"
                    rules={[
                      {
                        required: true,
                        message: 'Açıklayınız',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>


                </div>

                <div className='Q-9-5'>
                  <label>
                    5. GSI’da çalıştığınız sürede, aşağıda belirtilen konularda herhangi bir tecrübeniz oldu mu?
                  </label>
                  
                  <tr>
                    <th>
                    <label>Değerlendirme Konuları</label>
                    </th>

                    <th>
                    <label> Evet </label>
                    </th>

                    <th>
                    <label> Hayır </label>
                    </th>
                  </tr>

                  <tr>

                  <td>
                    <labe>
                        Haksız Muamele
                      </labe>
                    </td>

                    
                    
                    <td>

                    <Form.Item
                            name=""
                            valuePropName=""
                            wrapperCol={{
                              offset: 8,
                              span: 16,
                            }}
                          >
                            <Checkbox></Checkbox>
                          </Form.Item>

                    </td>

                    <td>

                    <Form.Item
                            name=""
                            valuePropName=""
                            wrapperCol={{
                              offset: 8,
                              span: 16,
                            }}
                          >
                            <Checkbox></Checkbox>
                          </Form.Item>

                    </td>

                  </tr>

                  <tr>

                  <td>

                    <label>
                      Adam Kayırma
                    </label>

                    </td>

                    <td>

                    <Form.Item
                            name=""
                            valuePropName=""
                            wrapperCol={{
                              offset: 8,
                              span: 16,
                            }}
                          >
                            <Checkbox></Checkbox>
                          </Form.Item>

                    </td>

                    <td>

                    <Form.Item
                            name=""
                            valuePropName=""
                            wrapperCol={{
                              offset: 8,
                              span: 16,
                            }}
                          >
                            <Checkbox></Checkbox>
                          </Form.Item>

                    </td>

                  </tr>

                  <tr>

                  <td>
                  <labe>
                      Tehdit
                    </labe>

                    </td>

                    <td>

                    <Form.Item
                            name=""
                            valuePropName=""
                            wrapperCol={{
                              offset: 8,
                              span: 16,
                            }}
                          >
                            <Checkbox></Checkbox>
                          </Form.Item>

                    </td>

                    <td>

                    <Form.Item
                            name=""
                            valuePropName=""
                            wrapperCol={{
                              offset: 8,
                              span: 16,
                            }}
                          >
                            <Checkbox></Checkbox>
                          </Form.Item>

                    </td>

                  </tr>

                  <tr>

                  <td>
                  <labe>
                      Şirket Prosedürlerinin İhlali
                    </labe>
                    </td>

                    <td>
                    <Form.Item
                            name=""
                            valuePropName=""
                            wrapperCol={{
                              offset: 8,
                              span: 16,
                            }}
                          >
                            <Checkbox></Checkbox>
                          </Form.Item>

                    </td>

                    <td>

                    <Form.Item
                            name=""
                            valuePropName=""
                            wrapperCol={{
                              offset: 8,
                              span: 16,
                            }}
                          >
                            <Checkbox></Checkbox>
                          </Form.Item>

                    </td>

                  </tr>

                  <tr>

                  <td>
                  <labe>
                      Din, Dil, Renk, Irk, Cinsiyet, Tabiiyet v.b. Ayrımcılığı
                    </labe>

                    </td>
                    
                    <td>

                    <Form.Item
                            name=""
                            valuePropName=""
                            wrapperCol={{
                              offset: 8,
                              span: 16,
                            }}
                          >
                            <Checkbox></Checkbox>
                          </Form.Item>

                    </td>

                    <td>

                    <Form.Item
                            name=""
                            valuePropName=""
                            wrapperCol={{
                              offset: 8,
                              span: 16,
                            }}
                          >
                            <Checkbox></Checkbox>
                          </Form.Item>

                    </td>

                  </tr>



                </div>




                  

              {/* ques-list-9 */}
              </div>


              {/* chapter-9 */}
              </div>
                  
              
              <div className='chapter-10'>

                  <div className="title">
                      <p>
                        BÖLÜM X: YENİ İŞVERENİNİZ
                      </p>
                  </div>

                  <div className="disclaimer-10">
                      <p>
                        Başka bir şirkette işe girmek için ayrılıyorsanız:
                      </p>
                    </div>


                  <div className='ques-10-1'>
                    
                    <label>
                        1. Yeni şirketiniz hangi iş kolunda faaliyet gösteriyor?
                    </label>

                    <table>
                      <tr>
                        <td>
                            <Form.Item
                            name=""
                            valuePropName=""
                            wrapperCol={{
                              offset: 8,
                              span: 16,
                            }}
                          >
                            <Checkbox>Hukuk</Checkbox>
                          </Form.Item>
                        </td>

                        <td>

                            <Form.Item
                              name=""
                              valuePropName=""
                              wrapperCol={{
                                offset: 8,
                                span: 16,
                              }}
                            >
                              <Checkbox>Diğer</Checkbox>
                            </Form.Item>
                        </td>
                      </tr>
                    </table>



                      <Form.Item
                                  label="Açıklayınız"
                                  name="explanation"
                                  rules={[
                                    {
                                      required: true,
                                      message: '',
                                    },
                                  ]}
                                >
                                  <Input />
                      </Form.Item>
                



                  </div>

                  <div className='ques-10-2'>

                    <label>
                        2. Yeni şirketinize hangi konumda geçiyorsunuz?
                    </label>

                    <div className='ques-10-2-table-container'>
                        <table>
                          <tr>
                                <td>
                                  <label>
                                    Aynı Pozisyon
                                  </label>
                                  
                                </td>

                                <td>
                                <label>
                                    Terfi Ederek
                                  </label>
                                </td>

                                <td>
                                <label>
                                    Farklı Bir Pozisyon 
                                  </label>
                                </td>

                                <td>
                                <label>
                                    Diğer (Açıklayınız)
                                  </label>
                                </td>

                          </tr>


                          <tr>
                                <td>

                                    <Form.Item
                                      name=""
                                      valuePropName=""
                                      wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                      }}
                                    >
                                      <Checkbox></Checkbox>
                                    </Form.Item>
                                  
                                </td>

                                <td>

                                    <Form.Item
                                      name=""
                                      valuePropName=""
                                      wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                      }}
                                    >
                                      <Checkbox></Checkbox>
                                    </Form.Item>
                                </td>

                                <td>

                                      <Form.Item
                                        name=""
                                        valuePropName=""
                                        wrapperCol={{
                                          offset: 8,
                                          span: 16,
                                        }}
                                      >
                                        <Checkbox></Checkbox>
                                      </Form.Item>
                                </td>

                                <td>

                                      <Form.Item
                                        name=""
                                        valuePropName=""
                                        wrapperCol={{
                                          offset: 8,
                                          span: 16,
                                        }}
                                      >
                                        <Checkbox></Checkbox>
                                      </Form.Item>
                                </td>

                              </tr>


                        </table>
                    </div>
                  </div>

                  <div className='ques-10-3'>

                    <div className='title'>
                          <label>
                              3. Yeni şirketiniz GSI’ın sunmadığı ek olanak/lar sunuyor mu? Açıklayınız.
                          </label>
                    </div>

                    <Form.Item
                                  label="Açıklayınız"
                                  name="explanation"
                                  rules={[
                                    {
                                      required: true,
                                      message: '',
                                    },
                                  ]}
                                >
                                  <Input />
                      </Form.Item>

                  </div>

                  <div className='ques-10-4'>

                  <div className='title'>
                          <label>
                              4. Belirtmek istediğiniz başka bir konu varsa lütfen açıklayınız.
                          </label>
                    </div>

                    <Form.Item
                                  label="Açıklayınız"
                                  name="explanation"
                                  rules={[
                                    {
                                      required: true,
                                      message: '',
                                    },
                                  ]}
                                >
                                  <Input />
                      </Form.Item>
                    

                  </div>
                    
                
              {/* chapter-10 */}
              </div>

          
              <div className='submitButton'>

                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button type="primary" htmlType="submit">
                        Gönder
                      </Button>
                    </Form.Item>

              </div>

        
        
        </Form> 


           {/* chapters-containers */}
          </div>




      {/* middle-region */}
      </div>




    {/* App */}
    </div>
  )
}

export default App
