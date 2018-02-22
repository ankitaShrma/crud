/*
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * For more information, please refer to <http://www.wtfpl.net/>
 */

#include "node.h"
#include "node_buffer.h"
#include "nan.h"

#if (NODE_MODULE_VERSION < 10)
#define RUNLOOP_SEMANTICS ev_run(ev_default_loop(), EVRUN_ONCE)
#else
#define RUNLOOP_SEMANTICS uv_run(uv_default_loop(), UV_RUN_ONCE)
#endif

using v8::Handle;
using v8::Object;
using v8::FunctionTemplate;

#define EXPORT_METHOD(C, S) C->Set(NanNew(# S), NanNew<FunctionTemplate>(S)->GetFunction());

NAN_METHOD(stall) {
  NanScope();
  RUNLOOP_SEMANTICS;
  NanReturnUndefined();
}

void Init(Handle<Object> exports) {
  NanScope();
  EXPORT_METHOD(exports, stall);
}

NODE_MODULE(stall, Init)
