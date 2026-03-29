class TaskManager {
  constructor() {
    this.taskForm = document.getElementById('add-task-form');
    this.taskInput = document.getElementById('task-input');
    this.prioritySelect = document.getElementById('priority-select');
    this.taskList = document.getElementById('task-list');
    this.emptyState = document.getElementById('empty-state');
    this.filterAll = document.getElementById('filter-all');
    this.filterActive = document.getElementById('filter-active');
    this.filterCompleted = document.getElementById('filter-completed');
    this.clearCompleted = document.getElementById('clear-completed');
    this.taskCount = document.getElementById('task-count');
    this.totalTasks = document.getElementById('total-tasks');
    this.activeTasks = document.getElementById('active-tasks');
    this.completedTasks = document.getElementById('completed-tasks');
    this.editModal = document.getElementById('edit-modal');
    this.editForm = document.getElementById('edit-task-form');
    this.editInput = document.getElementById('edit-task-input');
    this.editPriority = document.getElementById('edit-priority-select');
    this.editTaskId = document.getElementById('edit-task-id');
    this.closeModal = document.getElementById('close-modal');
    this.cancelEdit = document.getElementById('cancel-edit');
    this.tasks = [];
    this.currentFilter = 'all';
    this.draggedItem = null;
    this.init();
  }
  init() { this.loadTasks(); this.renderTasks(); this.updateStats(); this.setupEventListeners(); }
  addTask(e) { e.preventDefault(); const t = this.taskInput.value.trim(); if (!t) return; this.tasks.unshift({ id: Date.now().toString(), text: t, priority: this.prioritySelect.value, completed: false }); this.saveTasks(); this.renderTasks(); this.taskInput.value = ''; }
  loadTasks() { const s = localStorage.getItem('tasks'); if (s) this.tasks = JSON.parse(s); }
  toggleTaskComplete(id) { this.tasks = this.tasks.map(t => t.id === id ? { ...t,completed: !t.completed} : t); this.saveTasks(); this.renderTasks(); }
  updateTask(e) { e.preventDefault(); const id = this.editTaskId.value, t = this.editInput.value.trim(); if (!t) return; this.tasks = this.tasks.map(x => x.id === id ? { ...x, text: t, priority: this.editPriority.value } : x); this.saveTasks(); this.renderTasks(); this.closeEditModal(); }
  deleteTask(id) { if (confirm('Delete?')) { this.tasks = this.tasks.filter(t => t.id!==id); this.saveTasks(); this.renderTasks(); } }
  clearAllCompleted() { if (confirm('Clear completed?')) { this.tasks = this.tasks.filter(t=>!t.completed); this.saveTasks(); this.renderTasks(); } }
  saveTasks() { localStorage.setItem('tasks', JSON.stringify(this.tasks)); this.updateStats(); }
  renderTasks() {
    let f = [...this.tasks];
    if (this.currentFilter==='active') f = f.filter(t=>!t.completed);
    if (this.currentFilter==='completed') f = f.filter(t=>t.completed);
    this.taskList.innerHTML=''; if (!f.length) { this.emptyState.classList.remove('hidden'); this.taskList.appendChild(this.emptyState); return; }
    this.emptyState.classList.add('hidden');
    f.forEach((t,i)=>{ const el=this.createTaskElement(t); this.taskList.appendChild(el); setTimeout(()=>el.classList.add('fade-in'),i*50); });
    this.setupDragAndDrop();
  }
  createTaskElement(t) { 
    const el = document.createElement('div');
    el.className=`task-item p-4 hover:bg-gray-50 flex justify-between priority-${t.priority}`+(t.completed?' completed':'');
    el.draggable=true; el.dataset.id=t.id;
    const left=document.createElement('div'); left.className='flex items-center space-x-3';
    const cb=document.createElement('input'); cb.type='checkbox'; cb.checked=t.completed; cb.className='custom-checkbox';
    cb.addEventListener('change',()=>this.toggleTaskComplete(t.id));
    const span=document.createElement('span');
    span.textContent=t.text; span.addEventListener('dblclick',()=>this.openEditModal(t));
    left.append(cb,span);
    const right=document.createElement('div'); right.className='flex space-x-2';
    const edit=document.createElement('button'); edit.innerHTML='<i class="fas fa-edit"></i>'; edit.addEventListener('click',()=>this.openEditModal(t));
    const del=document.createElement('button'); del.innerHTML='<i class="fas fa-trash-alt"></i>'; del.addEventListener('click',()=>this.deleteTask(t.id));
    right.append(edit,del);
    el.append(left,right);
    return el;
  }
  updateStats(){ const tot=this.tasks.length,act=this.tasks.filter(t=>!t.completed).length,comp=this.tasks.filter(t=>t.completed).length;
    this.taskCount.textContent=`${tot} tasks`; this.totalTasks.textContent=tot; this.activeTasks.textContent=act; this.completedTasks.textContent=comp;
  }
  filterTasks(f){ this.currentFilter=f; document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); document.getElementById(`filter-${f}`).classList.add('active'); this.renderTasks();}
  openEditModal(t){ this.editTaskId.value=t.id; this.editInput.value=t.text; this.editPriority.value=t.priority; this.editModal.classList.remove('hidden'); }
  closeEditModal(){ this.editModal.classList.add('hidden'); }
  setupDragAndDrop(){ document.querySelectorAll('.task-item').forEach(el=>{
    el.addEventListener('dragstart',e=>{ e.dataTransfer.setData('text/plain',el.dataset.id); el.classList.add('dragging'); });
    el.addEventListener('dragend',e=>el.classList.remove('dragging'));
    el.addEventListener('dragover',e=>{ e.preventDefault(); }); 
    el.addEventListener('drop',e=>{ e.preventDefault(); const from= e.dataTransfer.getData('text/plain'), to=el.dataset.id;
      const fi=this.tasks.findIndex(x=>x.id===from), ti=this.tasks.findIndex(x=>x.id===to);
      this.tasks.splice(ti,0,this.tasks.splice(fi,1)[0]); this.saveTasks(); this.renderTasks();
    });
  }); }
  setupEventListeners(){
    this.taskForm.addEventListener('submit',this.addTask.bind(this));
    this.filterAll.addEventListener('click',()=>this.filterTasks('all'));
    this.filterActive.addEventListener('click',()=>this.filterTasks('active'));
    this.filterCompleted.addEventListener('click',()=>this.filterTasks('completed'));
    this.clearCompleted.addEventListener('click',this.clearAllCompleted.bind(this));
    this.editForm.addEventListener('submit',this.updateTask.bind(this));
    this.closeModal.addEventListener('click',this.closeEditModal.bind(this));
    this.cancelEdit.addEventListener('click',this.closeEditModal.bind(this));
  }
}
document.addEventListener('DOMContentLoaded',()=>new TaskManager());
