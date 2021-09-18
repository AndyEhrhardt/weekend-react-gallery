function InputForm(props){  
    return(
        <>
        <form onSubmit={() => {props.handleSubmit}}>
            <label>
                File Name
            </label>
            <input
                type="text"
                placeholder="File Name"
                value={props.fileNameInput}
                onChange={(evt) => props.setFileNameInput(evt.target.value)}
            />
            <label>
                Description
            </label>
            <input
                type="text"
                placeholder="Description"
                value={props.descriptionInput}
                onChange={(evt) => props.setDescriptionInput(evt.target.value)}
            />
            <button type="submit" onClick={props.handleSubmit}>Add Picture</button>
        </form>
        </>
    )
}

export default InputForm;