const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.custom,
		C3.Plugins.TiledBg,
		C3.Plugins.Shape3D,
		C3.Behaviors.solid,
		C3.Plugins.Camera3D,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Behaviors.Bullet,
		C3.Behaviors.MoveTo,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Camera3D.Acts.LookParallelToLayout,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Exps.ZElevation,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Camera3D.Acts.SetPosition,
		C3.Plugins.Mouse.Cnds.OnMovement,
		C3.Plugins.Camera3D.Acts.RotateCamera,
		C3.Plugins.Mouse.Exps.MovementX,
		C3.Plugins.Mouse.Exps.MovementY,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Mouse.Acts.RequestPointerLock,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Plugins.Camera3D.Exps.CameraXRotation,
		C3.Plugins.System.Exps.dt,
		C3.Behaviors.custom.Acts.PushOutSolidAngle,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Shape3D.Acts.SetZElevation,
		C3.Plugins.Shape3D.Acts.SetAngle,
		C3.Plugins.Shape3D.Acts.SetInstanceVar,
		C3.Plugins.Camera3D.Exps.CameraYRotation,
		C3.Behaviors.Bullet.Exps.Speed,
		C3.Plugins.Shape3D.Acts.SetPos,
		C3.Plugins.Shape3D.Exps.X,
		C3.Plugins.Shape3D.Exps.Angle,
		C3.Plugins.Shape3D.Exps.Y,
		C3.Plugins.Shape3D.Exps.ZElevation,
		C3.Plugins.Shape3D.Cnds.OnCreated,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Shape3D.Acts.Destroy,
		C3.Plugins.Shape3D.Cnds.OnCollision,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Plugins.Shape3D.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Shape3D.Acts.SubInstanceVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Custom: 0},
	{Player: 0},
	{TiledBackground: 0},
	{TiledBackground2: 0},
	{Solid: 0},
	{Shape: 0},
	{"3DCamera": 0},
	{Keyboard: 0},
	{Mouse: 0},
	{zAxis: 0},
	{Speed: 0},
	{Bullet: 0},
	{Health: 0},
	{MoveTo: 0},
	{Enemy: 0},
	{SpawnEnemy: 0},
	{"3DShape2": 0},
	{Sprite: 0},
	{Audio: 0},
	{Score: 0},
	{Text: 0},
	{InitialWidth: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{move_pad: 0},
	{DragDrop: 0},
	{analog: 0},
	{BUTTONMOVE: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Touch: 0},
	{"3DShape": 0},
	{Sprite9: 0},
	{tembak: 0},
	{ATAP: 0},
	{BOX: 0},
	{PlayerHeight: 0},
	{PlayerSpeed: 0},
	{MouseSpeed: 0},
	{Life: 0},
	{LifeMax: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Shape: class extends self.I3DShapeInstance {},
	_3DCamera: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Bullet: class extends self.I3DShapeInstance {},
	Enemy: class extends self.I3DShapeInstance {},
	SpawnEnemy: class extends self.ISpriteInstance {},
	_3DShape2: class extends self.I3DShapeInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Text: class extends self.ITextInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	move_pad: class extends self.ISpriteInstance {},
	analog: class extends self.ISpriteInstance {},
	BUTTONMOVE: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	_3DShape: class extends self.I3DShapeInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	tembak: class extends self.ISpriteInstance {},
	ATAP: class extends self.ITiledBackgroundInstance {},
	BOX: class extends self.I3DShapeInstance {}
}