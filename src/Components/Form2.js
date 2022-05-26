import React from 'react'

function Form2() {
    return (
        <form className="form2">
            <div>
                <label class="report" for="report">Upload Synopsis/Report :</label>
                <input type="file" class="report" id="report" required />
            </div>
            <div>
                <label for="projectlink">Upload Project Link :</label>
                <input type="text" className="projectlink" placeHolder="Github/Drive Link" required />
            </div>
            <button type="submit" className="submit">Submit</button>
        </form>
    )
}

export default Form2