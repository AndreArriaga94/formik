import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from './components/TextInput'
import CheckBox from "./components/CheckBox";
import Radio from "./components/Radio";
import Select from "./components/Select";

const validate = (values) => {
  const errors = {}
    if(!values.name){
      errors.name = 'Requerido'
    } else if(values.name.length < 5){
      errors.name = 'El nombre es muy corto'
    }
    
    if(!values.lastName){
      errors.lastName = 'Requerido'
    } else if(values.lastName.length < 5){
      errors.lastName = 'El apellido es muy corto'
    }

    if(!values.radio){
      errors.radio = 'Requerido'
    }
  return errors
}

function App() {
  return (
    <Formik
        initialValues={{name:'',lastName:'',email:'',radio:'',}}
        validate={validate}
        onSubmit={values => console.log(values)}
        
    >
        <Form>
            <TextInput name='nombre' label='Nombre'/>
            <br></br>
            <TextInput name='lastName' label='Apellido'/>
            <br></br>
            <TextInput name='email' label='Correo'/>
            <br></br>
            <Select label='Selecciona una opción' name='select'>
                <option value=''>Selecciona una opción</option>
                <option value='1'>Opción 1</option> 
                <option value='2'>Opción 2</option> 
                <option value='3'>Opción 3</option>
            </Select>
            <br></br>
            <CheckBox name="accept">
                Aceptar los términos y condiciones
            </CheckBox>
            <br></br>
            <Radio name="radio" value="feliz" label="feliz"/>
            <Radio name="radio" value="triste" label="triste"/>
            <Radio name="radio" value="enojado" label="enojado"/>
            <ErrorMessage name='radio'/>
            <br></br>
            <button type="submit">Enviar</button>
            {/* <label>Nombre</label>
            <Field name='name' type='text' className='input'/> 
            <Field name='textArea' as='textarea' className='input'/>
            <Field name='select' as='select' className='input'>
                <option value=''>Selecciona una opción</option>
                <option value='1'>Opción 1</option>
                <option value='2'>Opción 2</option>
                <option value='3'>Opción 3</option>
            </Field>
            <ErrorMessage name='name'/> 
            <br></br>
            <label>Apellido</label>
            <Field name='lastName' type='text'/>
            <ErrorMessage name='lastName'/>
            <br></br>
            <label>Email</label>
            <Field name='email' type='email'/>
            <ErrorMessage name='email'/>
            <br></br> */}
        </Form>
        
    </Formik>
  );
}

export default App;
