import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to='home' activeClass='active' spy={true} smooth={true} duration={1000}>
							Home
						</Link>
					</li>
					<li className='link-divider'></li>
					<li>
						<Link to='about' activeClass='active' spy={true} smooth={true} duration={1000}>
							About
						</Link>
					</li>
					<li className='link-divider'></li>
					<li>
						<Link to='projects' activeClass='active' spy={true} smooth={true} duration={1000} offset={10}>
							Projects
						</Link>
					</li>
					<li className='link-divider'></li>
					<li>
						<Link to='contact' activeClass='active' spy={true} smooth={true} duration={1000}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
