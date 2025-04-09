import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
	return (
		<div
			className={
				'App' +
				(navigator.userAgent.indexOf('Chrome') > -1
					? 'Chrome'
					: 'nonChrome')
			}
		>
			<Header />
			<Main />
		</div>
	)
}

export default App
