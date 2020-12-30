import datetime

def posted(d1,t):
    d2=datetime.datetime.now() 
    sec=abs(int(t.strftime('%S'))-int(d2.strftime('%S')))
    mn,sec=abs(int(t.strftime('%M'))-int(d2.strftime('%M')))+sec//60,sec%60
    hr,mn=abs(int(t.strftime('%H'))-int(d2.strftime('%H')))+mn//60,mn%60

    day,hr=abs(int(d1.strftime('%d'))-int(d2.strftime('%d')))+hr//24,hr%24
    mon,day=abs(int(d1.strftime('%m'))-int(d2.strftime('%m')))+day//60,day%31
    year,mon=abs(int(d1.strftime('%Y'))-int(d2.strftime('%Y')))+mon//12,mon%12
    # print(sec,mn,hr,day,mon,year)
    if year>0:
        if year==1:
            return str(year)+"yr"
        else:return str(year)+"yrs"

    if mon>0:
        if mon==1:
            return str(mon)+"months"
        else:return str(mon)+"months"

    if day>0:
        if day==1:
            return str(day)+"day"
        else:return str(day)+"days"

    if hr>0:
        if hr==1:
            return str(hr)+"hour"
        else:return str(hr)+"hours"

    if mn>0:
        if mn==1:
            return str(mn)+"minute "
        else:return str(mn)+"minutes"

    return "just now"
