const handlegetAllTeachers = (db) => (req, res) => {
	const { tch_id, imgfile, name, email, subject } =req.body;

	db.select('*')
	.from('teachers').orderBy('tch_id', 'asc')
	.then(teacher => {
		if(teacher.length){
			console.log(teacher);
			res.json(teacher)
			}
	})
	.catch(err => res.status(400).json('unable to update entriessss')) 
}

module.exports = {
	handlegetAllTeachers: handlegetAllTeachers
}