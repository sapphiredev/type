#include <node.h>

using v8::Array;
using v8::FunctionCallbackInfo;
using v8::FunctionTemplate;
using v8::Integer;
using v8::Local;
using v8::Promise;
using v8::Proxy;
using v8::String;
using v8::Undefined;
using v8::Value;

void GetPromiseDetails(const FunctionCallbackInfo<Value> &args)
{
	auto isolate = args.GetIsolate();

	if (!args[0]->IsPromise())
	{
		args.GetReturnValue().Set(Undefined(isolate));
		return;
	}

	auto promise = args[0].As<Promise>();
	auto state = promise->State();

	Local<Value> values[2] = { Integer::New(isolate, state) };
	size_t number_of_values = 1;

	if (state != Promise::PromiseState::kPending) {
		values[number_of_values++] = promise->Result();
	}

	Local<Array> ret = Array::New(isolate, values, number_of_values);
	args.GetReturnValue().Set(ret);
}

void GetProxyDetails(const FunctionCallbackInfo<Value>& args) {
	auto isolate = args.GetIsolate();

	if (!args[0]->IsProxy())
	{
		args.GetReturnValue().Set(Undefined(isolate));
		return;
	}

	auto proxy = args[0].As<Proxy>();

	if (args.Length() == 1 || args[1]->IsTrue()) {
		Local<Value> ret[] = {
			proxy->GetTarget(),
			proxy->GetHandler()
		};

		args.GetReturnValue().Set(Array::New(isolate, ret, 2));
	} else {
		auto ret = proxy->GetTarget();
		args.GetReturnValue().Set(ret);
	}
}

NODE_MODULE_INIT()
{
	auto isolate = context->GetIsolate();

	exports->Set(context,
		String::NewFromUtf8(isolate, "getPromiseDetails").ToLocalChecked(),
		FunctionTemplate::New(isolate, GetPromiseDetails)->GetFunction(context).ToLocalChecked());
	exports->Set(context,
		String::NewFromUtf8(isolate, "getProxyDetails").ToLocalChecked(),
		FunctionTemplate::New(isolate, GetProxyDetails)->GetFunction(context).ToLocalChecked());
}
