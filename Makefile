project=$(shell pwd)
scripts=$(project)
processes=4

clean:
	-rm -rf build
	-rm -rf *~*
	-find . -name '*.pyc' -exec rm {} \;
	-rm -rf hotel.egg-info

test: clean
	python $(scripts)/manage.py test

fresh_syncdb:
	-rm -f $(project).sqlite
	python $(scripts)/manage.py syncdb --noinput

syncdb:
	python $(scripts)/manage.py syncdb --noinput

collectstatic:
	python $(scripts)/manage.py collectstatic

run:
	python $(scripts)/manage.py runserver 0.0.0.0:8000
