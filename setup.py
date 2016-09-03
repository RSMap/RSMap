from setuptools import setup

setup(name='RSMapWeb',
	version='0.1',
	description='RSMap web module',
	url='',
	author='José Manuel Luque',
	author_email='luqueburgosjm@gmail.com',
	license='GNU General Public License',
	packages=['RSMapWeb'],
	install_requires=[
        'django',
        'wheel'
    ],
    
	zip_safe=False

)
