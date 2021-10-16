const mongo_environment = require("./mongo-environment")

// @ponicode
describe("setup", () => {
    let inst

    beforeEach(() => {
        inst = new mongo_environment("png.mpg4")
    })

    test("0", async () => {
        await inst.setup()
    })
})

// @ponicode
describe("teardown", () => {
    let inst

    beforeEach(() => {
        inst = new mongo_environment("Safari")
    })

    test("0", async () => {
        await inst.teardown()
    })
})

// @ponicode
describe("runScript", () => {
    let inst

    beforeEach(() => {
        inst = new mongo_environment("Safari")
    })

    test("0", () => {
        let callFunction = () => {
            inst.runScript("if 1:\n            import sys, os, time, threading\n\n            # a thread, which waits for the main program to terminate\n            def joiningfunc(mainthread):\n                mainthread.join()\n                print 'end of thread'\n        \n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.runScript("\n      for (i=0; i < document.images.length; i++) {\n        if ((document.images[i].naturalWidth != 0) &&\n            (document.images[i].naturalHeight != 0)) {\n          window.domAutomationController.send(true);\n        }\n      }\n      window.domAutomationController.send(false);\n    ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.runScript("\nfunction Invoke-Something {\n\n}\nInvoke-Something")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.runScript("if 1:\n            childpid = os.fork()\n            if childpid != 0:\n                os.waitpid(childpid, 0)\n                sys.exit(0)\n\n            t = threading.Thread(target=joiningfunc,\n                                 args=(threading.current_thread(),))\n            t.start()\n            print 'end of main'\n            ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.runScript("\n    var editor = tinyMCE.activeEditor;\n    editor.selection.select(editor.dom.select('a')[0]);")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.runScript(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
