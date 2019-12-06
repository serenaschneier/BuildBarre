from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

chosen_vids = {'plie': '' , 
'tendu': '',
'dgg': '',
'r': '',
'frappe': '',
'dev': '',
'gb': '',
'str': ''
}
all_routine_vids = [] #all routines, where each routine is a dict
timesum = 0


''' homepage '''
@app.route('/', methods=['GET','POST'])
def home():
	return render_template('buildbarre_home.html')

''' user clicked create routine  '''
@app.route('/create', methods=['GET','POST'])
def create():
    return render_template('buildbarre2_createroutine.html') 

''' user clicked saved routines  '''
@app.route('/saved', methods=['GET','POST'])
def saved():
	print('all_routine_vids:', all_routine_vids)
	return render_template('buildbarre_savedroutine.html', all_routine_vids=all_routine_vids) 

''' user clicked button to add video to routine template  '''
@app.route('/append_to_chosen_videos', methods=['GET','POST'])
def append_to_chosen_videos():
	category = ''
	json_data = request.get_json()
	category = json_data[0:len(json_data)-1]
	chosen_vids[category] = json_data

	print('chosen_vids: ', chosen_vids)
	return jsonify(chosen_vids)

''' user clicked button to add video to routine template  '''
@app.route('/chosen_vids_helper', methods=['GET','POST'])
def chosen_vids_helper():

 	json_data = request.get_json()
 	
 	print(chosen_vids)

 	return jsonify(chosen_vids)

''' user finished building a routine, ready to navigate to saved routines or refresh create routine '''
@app.route('/save_new_routine', methods=['GET','POST'])
def save_new_routine():
	json_data = request.get_json()
	instr = json_data['instruction']
	routine = json_data['chosen_videos']
	total_time = json_data['total time']
	routname = json_data['routine name']
	timebrack = json_data['time bracket']

	#if user clicked save button, save the full routine to later display it on saved routines page
	if instr == 'save':
		full_routine = {
			'id': len(all_routine_vids),
			'plie video': routine['plie'],
			'tendu video': routine['tendu'],
			'dgg video': routine['dgg'],
			'r video': routine['r'],
			'frappe video': routine['frappe'],
			'dev video': routine['dev'],
			'gb video': routine['gb'],
			'str video': routine['str'],
			'total time': total_time,
			'routine name': routname,
			'time bracket': timebrack
		}
		all_routine_vids.append(full_routine)
	#clear chosen vids for next time user wants to create a routine:
	#if user clicked rest button, clear chosen videos
	global chosen_vids 
	chosen_vids = {'plie': '' , 
	'tendu': '',
	'dgg': '',
	'r': '',
	'frappe': '',
	'dev': '',
	'gb': '',
	'str': ''
	}

	return jsonify(instr) 


if __name__ == '__main__':
	app.run(debug=True)

