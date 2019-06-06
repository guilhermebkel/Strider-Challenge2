create table task (
	
	id bitint auto_increment not null,
	name varchar(20) not null,
	description varchar(200) not null,

	primary key (id)
);