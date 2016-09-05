project=$(shell pwd)
scripts=$(project)
processes=4

clean:
	-rm -rf build
	-rm -rf *~*
	-find . -name '*.pyc' -exec rm {} \;
	-rm -rf rsmapweb.egg-info

test: clean
	python $(scripts)/manage.py test

migrate:
	python $(scripts)/manage.py makemigrations rsmapweb
	python $(scripts)/manage.py migrate

fresh_syncdb:
	-rm -f $(project).sqlite
	python $(scripts)/manage.py syncdb --noinput

syncdb:
	python $(scripts)/manage.py syncdb --noinput

collectstatic:
	python $(scripts)/manage.py collectstatic

run:
	python $(scripts)/manage.py runserver 0.0.0.0:8000

server_run:
	sudo ../rsmapvirtualenv/bin/python manage.py runserver 0.0.0.0:80
