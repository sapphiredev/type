#include <nan.h>

void GetPromiseDetails(const Nan::FunctionCallbackInfo<v8::Value>& args) {
	if (!args[0]->IsPromise()) {
		return;
	}

	auto isolate = args.GetIsolate();

	v8::Local<v8::Promise> promise = args[0].As<v8::Promise>();
	int state = promise->State();

	v8::Local<v8::Value> values[2] = { v8::Integer::New(isolate, state) };
	size_t number_of_values = 1;

	if (state != v8::Promise::PromiseState::kPending) {
		values[number_of_values++] = promise->Result();
	}

	v8::Local<v8::Array> ret = v8::Array::New(isolate, values, number_of_values);
	args.GetReturnValue().Set(ret);
}

void GetProxyDetails(const Nan::FunctionCallbackInfo<v8::Value>& args) {
	if (!args[0]->IsProxy()) {
		return;
	}

	v8::Local<v8::Proxy> proxy = args[0].As<v8::Proxy>();

	if (args.Length() == 1 || args[1]->IsTrue()) {
		v8::Local<v8::Value> ret[] = {
			proxy->GetTarget(),
			proxy->GetHandler()
		};

		args.GetReturnValue().Set(
			v8::Array::New(args.GetIsolate(), ret, sizeof ret / sizeof ret[0])
		);
	} else {
		v8::Local<v8::Value> ret = proxy->GetTarget();

		args.GetReturnValue().Set(ret);
	}
}

void Init(v8::Local<v8::Object> exports) {
	v8::Local<v8::Context> context = exports->CreationContext();

	exports->Set(context, Nan::New("getPromiseDetails").ToLocalChecked(), Nan::New<v8::FunctionTemplate>(GetPromiseDetails)->GetFunction(context).ToLocalChecked());
	exports->Set(context, Nan::New("getProxyDetails").ToLocalChecked(), Nan::New<v8::FunctionTemplate>(GetProxyDetails)->GetFunction(context).ToLocalChecked());
}

NODE_MODULE(type, Init);
