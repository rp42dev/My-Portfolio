import React from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {
	const [page, setPage ] = React.useState('home');
	
	const [actions] = React.useState({
    changePage: (pageNum) => setPage(pageNum),
  });

	const [menuOpen, setMenuOpen] = React.useState(false);
	const [setValue] = React.useState({
		setMenu: valueSet => setMenuOpen(valueSet)
	});
	
	return (
		<AppContext.Provider value={{ page, actions, menuOpen, setValue }}>
			{props.children}
		</AppContext.Provider>
	);
}