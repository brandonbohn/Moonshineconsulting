
import { BlogEntry } from "./types";
import { blogData } from "./blogdata";
export { BlogEntry } from "./types";
export { blogData } from "./blogdata"; 
interface BlogComponentsProps {
	category: 'MoonshinesCorner' | 'Rehabsolutions' | 'SeniorTips' | 'all';
}

function BlogComponent({ category = 'all' }: BlogComponentsProps) {
	const getblogEntries = (category: string): BlogEntry[] => {
		if (category === 'all' || !category) {
			return [
				...blogData.MoonshinesCorner.map(entry => ({ ...entry })),
				...blogData.Rehabsolutions.map(entry => ({  ...entry })),
				...blogData.SeniorTips.map(entry => ({ ...entry,  }))
			];
		}
		if (category === 'MoonshinesCorner') {
			return [...blogData.MoonshinesCorner];
		}
		if (category === 'Rehabsolutions') {
			return blogData.Rehabsolutions.map(entry => ({ ...entry,  }));
		}
		if (category === 'SeniorTips') {
			return blogData.SeniorTips.map(entry => ({ ...entry, }));
		}
		return [];
	};

	const blogEntries = getblogEntries(category);

	return (
		<div>
			{blogEntries.map((entry, index) => (
				<div key={index} className="blog-entry">
					<h2>{entry.title}</h2>
					<p>{entry.article}</p>
					<p><strong>Author:</strong> {entry.author}</p>
					<p><strong>Date:</strong> {entry.date}</p>
					<img src={entry.imageUrl} alt={entry.title} />
					<p><strong>Category:</strong> {entry.category}</p>
				</div>
			))}
		</div>
	);
}

export default BlogComponent;