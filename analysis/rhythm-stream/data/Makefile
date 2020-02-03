
DATADIR = ../../../../rds-scores/kern

PROG = /usr/local/bin/accent-features

data: clean
	for i in $(DATADIR)/*.krn; \
	do \
		echo Creating feature file $$(basename $$i .krn | sed 's/_.*//').txt from score file $$i; \
		$(PROG) $$i > $$(basename $$i .krn | sed 's/_.*//').txt; \
	done

clean:
	rm -f *.txt
