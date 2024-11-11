import { useField } from "formik"

const Radio = ({label, ...props}) => {
    const [field] = useField({...props, type: 'radio'})

    // console.log({field, meta})
    return(
        <div className="control">
            <label className="label">
            <input type='radio' {...field} {...props}/>
            {label}
            </label>
        </div>
    )
}

export default Radio