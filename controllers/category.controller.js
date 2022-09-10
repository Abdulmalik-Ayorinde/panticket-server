import Category from './../models/category.model';

export async function createCategory(req, res) {
	try {
		const newCategory = await Category.create(req.body);
		return res.status(201).json({
			message: 'Category created successfully',
			category: newCategory,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}
export async function deleteCategory(req, res) {
	try {
		const deleteCategory = await Category.findByIdAndDelete(req.params.id);
		return res.status(201).json({
			message: 'Category deleted successfully',
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}
export async function updateCategory(req, res) {
	try {
		const UpdateCategory = await Category.findByIdAndUpdate(
			req.params.id,
			req.body
		);
		return res.status(201).json({
			message: 'Category Updated successfully',
			category: UpdateCategory,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}

export async function fetchCategory(req, res) {
	try {
		const GetCategory = await Category.find();
		return res.status(200).json({
			message: 'Categories Gotten successfully',
			category: GetCategory,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}

export async function fetchSingleCategory(req, res) {
	try {
		const GetSingleCategory = await Category.findById(req.params.id);
		return res.status(200).json({
			message: 'Category Got successfully',
			category: GetSingleCategory,
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			message: 'Issues processing your request',
		});
	}
}
