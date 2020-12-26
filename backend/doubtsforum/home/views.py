from django.shortcuts import render
from django.contrib.auth.models import User
from posting.models import Comments, Posts, Likes, Categories
from django.http import HttpResponse
import json 
from django.core.serializers import serialize
# Create your views here.

def home(request):
    res=[]
    print("hello")
    users=User.objects.all()
    for i in users:
        posts=Posts.objects.filter(user=i)
        for j in posts:
            data={}
            data['username']=i.username
            data['profession']=i.profession
            data['id']=j.id 
            data['description']=j.question
            data['postedtime']=str(j.postedtime)
            data['liked']=len(Likes.objects.filter(post=j,liked=True))
            data['comment']=len(Comments.objects.filter(post=j))
            data['categories']=[]
            for k in json.loads(serialize('json',Categories.objects.filter(user=i,post=j))):
                data['categories'].append(k['fields']['category'])
            if data:
                res.append(data)
    return HttpResponse(json.dumps(res),status=200)

def filt(request,category):
    res=[]
    cat=category
    users=User.objects.all()
    up=[]
    for k in json.loads(serialize('json',Categories.objects.filter(category=category))):
        up.append(list([k['fields']['user'],k['fields']['post']]))
    for (k,v) in up:
        i=User.objects.get(id=k)
        j=Posts.objects.get(id=v)
        data={}
        data['username']=i.username
        data['profession']=i.profession
        data['id']=j.id 
        data['description']=j.question
        data['postedtime']=str(j.postedtime)
        data['liked']=len(Likes.objects.filter(post=j,liked=True))
        data['comment']=len(Comments.objects.filter(post=j))
        data['categories']=[]
        for k in json.loads(serialize('json',Categories.objects.filter(user=i,post=j))):
            data['categories'].append(k['fields']['category'])
        if data and data['categories']:
            res.append(data)
    return HttpResponse(json.dumps(res),status=200)




#                                                                                    directcomment[0]

#                     [1,a,0,c[]]                         [2,b,0]                     [3,c,0]                             [4,d,0]                    [5,e,0]     

# indirect : [6,aa,1,c[]]        [7,ab,1]        [8,ba,2]        [9,bb,2]        [10,ca,3]       [11,cb,3]       [12,da,4]       [13,db,4]       [14,ea,5]       [15,eb,5]

#         [16,aaa,6]


def dfs(l,r):
    if not r:return
    try:
        r['comments']=l[r['id']]
        for i in range(len(r['comments'])):
            dfs(l,r['comments'][i])
    except:return



def comments(request,id):
    post=Posts.objects.get(id=id)
    cmts=Comments.objects.filter(post=post)
    directcomment=[]
    indirectcomment={}
    for i in json.loads(serialize('json',cmts)):

        k=i['fields']
        k['user']=User.objects.get(id=k['user']).username
        k['id']=i['pk']
        k['comments']=[]
        if i['fields']['parentComment']==0:
            directcomment.append(k)
        else:
            try:
                indirectcomment[i['fields']['parentComment']].append(k) 
            except:
                indirectcomment[i['fields']['parentComment']]=list()
                indirectcomment[i['fields']['parentComment']].append(k) 
       
    res=[]

    for i in directcomment:
        r=i
        r['comments']=indirectcomment[i['id']]
        for j in range(len(r['comments'])):
            dfs(indirectcomment,r['comments'][j])
        res.append(r)
    return HttpResponse(json.dumps(res),status=200)

