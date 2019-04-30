use top_songsDB;

select s.artist, count(*) "Debut Hits"
from top5000 s inner join top_albums a on (s.year = a.year and s.artist = a.band)
-- where s.artist = upper('QUEEN')
group by s.artist
having count(*) >= 5
order by count(*) desc;

select * from top5000;
select * from top_albums;
desc top5000;

select * from top5000 where artist = upper('QUEEN');
select artist, count(*) "appearances" from top5000 group by 1 having count(*) > 1 order by count(*) desc;
select artist, year from top5000 where (year >= 1960 and year <= 1969) order by 2,1;
select * from top5000 where song like '%love bites%';







