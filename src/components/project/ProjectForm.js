export default function ProjectForm(){
    return(
        <form>
            <div>
                <input type="text" placeholder="Project's name"/>
            </div>
            <div>
                <input type="number" placeholder="Project's budget"/>
            </div>        
            <div>
                <select name="category_id">
                    <option disabled>Select the category</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Create project"/>
            </div>
        </form>
    );
}